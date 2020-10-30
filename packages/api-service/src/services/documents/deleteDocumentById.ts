import { deleteDocument, getSingleDocumentById } from '@/models/document'
import { requirePathParameter, requireUserId } from '@/utils/api-gateway'
import { connectDatabase } from '@/utils/database'
import {
  APIGatewayRequest,
  createApiGatewayHandler,
  setContext,
} from '@/utils/middleware'
import {
  DocumentPermission,
  requirePermissionToDocument,
} from './authorization'
import createError from 'http-errors'
import { deleteObject } from '@/utils/s3'
import { Document } from '@/models/document'

connectDatabase()

export const handler = createApiGatewayHandler(
  setContext('documentId', (r) => requirePathParameter(r.event, 'documentId')),
  setContext('userId', (r) => requireUserId(r.event)),
  setContext('document', (r) => getSingleDocumentById(r.documentId)),
  requirePermissionToDocument(DocumentPermission.DeleteDocument),
  async (request: APIGatewayRequest): Promise<any> => {
    const { documentId, document } = request as APIGatewayRequest & {
      document: Document
    }
    // delete files from S3
    if (document.files) {
      await Promise.all(document.files.map((f) => deleteObject(f.path)))
    }
    if (document.thumbnailPath) {
      await deleteObject(document.thumbnailPath)
    }
    const documentDeleted = await deleteDocument(documentId)
    if (!documentDeleted) {
      throw new createError.InternalServerError('document could not be deleted')
    }
  },
)

export default handler
