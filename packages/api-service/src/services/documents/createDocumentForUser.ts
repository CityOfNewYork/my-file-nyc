import {
  Document as DocumentContract,
  DocumentCreate,
  DocumentCreateFile,
} from 'api-client'
import {
  createDocument,
  CreateDocumentInput,
  CreateDocumentFileInput,
  countDocumentsByOwnerId,
} from '@/models/document'
import { requirePathParameter } from '@/utils/api-gateway'
import { connectDatabase } from '@/utils/database'
import { createDocumentSchema } from './validation'
import { createFilePath } from '@/utils/s3'
import { v4 as uuidv4 } from 'uuid'
import { singleDocumentResult } from '@/services/documents'
import { MaxDocumentsPerUser } from '@/constants'
import {
  APIGatewayRequestBody,
  requireValidBody,
  setContext,
} from '@/utils/middleware'
import {
  requirePermissionToUser,
  UserPermission,
} from '@/services/users/authorization'
import createError from 'http-errors'
import { DocumentPermission } from './authorization'
import { createAuthenticatedApiGatewayHandler } from '@/services/users/middleware'
import { submitDocumentCreatedEvent } from '../activity'
import { User } from '@/models/user'
import { generatePDF } from '@/utils/pdf'
import fs from 'fs'
import path from 'path'

connectDatabase()

const validateFilesForMultipageDocument = (files: Array<DocumentCreateFile>) =>
  files.every(
    (f) =>
      f.contentType === 'application/pdf' ||
      f.contentType === 'image/jpeg' ||
      f.contentType === 'image/png' ||
      f.contentType === 'image/tiff',
  )

type Request = {
  ownerId: string
  userId: string
  user: User
  userPermissions: UserPermission[]
} & APIGatewayRequestBody<DocumentCreate>

export const handler = createAuthenticatedApiGatewayHandler(
  setContext('ownerId', (r) => requirePathParameter(r.event, 'userId')),
  requirePermissionToUser(UserPermission.WriteDocument),
  requireValidBody<DocumentCreate>(createDocumentSchema),
  async (
    request: APIGatewayRequestBody<DocumentCreate>,
  ): Promise<DocumentContract> => {
    const { ownerId, userId, user, userPermissions, event } = request as Request

    console.log(`
    ownerId: ${ownerId}
    userId: ${userId}
    user: 
    ${JSON.stringify(user, null, 2)}
    
    userPermissions: 
    ${JSON.stringify(userPermissions, null, 2)}
    
    event: ${event}
    `)

    const body = JSON.parse(request.event.body!) as DocumentCreate
    const documentCount = await countDocumentsByOwnerId(ownerId)
    if (documentCount >= MaxDocumentsPerUser) {
      throw new createError.BadRequest(
        `validation error: maximum document count of ${MaxDocumentsPerUser} reached`,
      )
    }

    const createdDate = new Date()
    const id = uuidv4()
    const { name, description, files, isMultipageDocument = false } = body

    if (isMultipageDocument && !validateFilesForMultipageDocument(files)) {
      throw new createError.BadRequest(
        'Multipage documents must only contain image or pdf files. This request contained files that do not fit these parameters.',
      )
    }

    const document: CreateDocumentInput = {
      name,
      description,
      id,
      ownerId: ownerId,
      createdBy: userId,
      createdAt: createdDate,
      updatedAt: createdDate,
      updatedBy: userId,
      isMultipageDocument,
      files: files.map(
        (f: any, index: number): CreateDocumentFileInput => {
          const fileId = uuidv4()
          return {
            ...f,
            id: fileId,
            path: createFilePath(ownerId, id, fileId),
            order: index,
            createdAt: createdDate,
            createdBy: userId,
            received: false,
          }
        },
      ),
    }

    console.log(`
    document: 
    ${JSON.stringify(document, null, 2)}
    `)

    // submit audit activity
    await submitDocumentCreatedEvent({
      ownerId,
      user,
      document: document,
      event,
    })

    const createdDocument = await createDocument(document)
    if (!createdDocument) {
      throw new createError.InternalServerError('document could not be created')
    }

    const permissions = userPermissions.includes(UserPermission.WriteUser)
      ? [
          DocumentPermission.DeleteDocument,
          DocumentPermission.WriteDocument,
          DocumentPermission.GetDocument,
        ]
      : [DocumentPermission.WriteDocument, DocumentPermission.GetDocument]
    const documentResult = singleDocumentResult(createdDocument, permissions)
    console.log(`
    documentResult:
    ${JSON.stringify(documentResult, null, 2)}
    `)
    return documentResult
  },
)

export default handler
