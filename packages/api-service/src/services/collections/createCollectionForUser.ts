import {
  Collection as CollectionContract,
  CollectionCreate as CollectionCreateContract,
  CollectionGrantType,
} from 'api-client'
import { uniq, flatMap } from 'lodash'
import { requirePathParameter } from '@/utils/api-gateway'
import { connectDatabase } from '@/utils/database'
import { createCollectionSchema } from './validation'
import { v4 as uuidv4 } from 'uuid'
import { createCollection, CreateCollectionInput } from '@/models/collection'
import { getDocumentsByIdsAndOwnerId } from '@/models/document'
import {
  setContext,
  APIGatewayRequestBody,
  requireValidBody,
} from '@/utils/middleware'
import {
  requirePermissionToUser,
  UserPermission,
} from '@/services/users/authorization'
import createError from 'http-errors'
import { createAuthenticatedApiGatewayHandler } from '@/services/users/middleware'
import { formatCollectionListItem } from '.'
import { CollectionPermission } from './authorization'
import { queueSharedCollectionNotification } from '../emails'
import { EnvironmentVariable, requireConfiguration } from '@/config'
import { submitCollectionCreatedEvent } from '../activity'
import { User } from '@/models/user'
import { userName } from '../users'

connectDatabase()

type Request = {
  ownerId: string
  userId: string
  user: User
  webAppDomain: string
} & APIGatewayRequestBody<CollectionCreateContract>

export const handler = createAuthenticatedApiGatewayHandler(
  setContext('ownerId', (r) => requirePathParameter(r.event, 'userId')),
  setContext('webAppDomain', () =>
    requireConfiguration(EnvironmentVariable.WEB_APP_DOMAIN),
  ),
  requirePermissionToUser(UserPermission.WriteCollection),
  requireValidBody<CollectionCreateContract>(createCollectionSchema),
  async (
    request: APIGatewayRequestBody<CollectionCreateContract>,
  ): Promise<CollectionContract> => {
    const {
      ownerId,
      userId,
      user,
      body,
      webAppDomain,
      event,
    } = request as Request

    console.log(`event data: ${JSON.stringify(request, null, 2)}`)

    // prepare values
    const createdAt = new Date()
    const updatedAt = createdAt
    const createdBy = userId
    const updatedBy = userId
    const {
      name,
      documentIds,
      individualEmailAddresses,
    } = body as CollectionCreateContract

    // extended validation - check documents exist for user
    const documents = await getDocumentsByIdsAndOwnerId(documentIds, ownerId)
    const allDocumentsBelongToUser = documents.length === documentIds.length
    if (!allDocumentsBelongToUser) {
      throw new createError.BadRequest(`validation error: documents not found`)
    }

    // shared inbox & qa user check
    const qaUserList = requireConfiguration(
      EnvironmentVariable.QA_USER_EMAIL_LIST,
    ).split(',')
    console.log(`qaUserList: ${JSON.stringify(qaUserList, null, 2)}`)
    const isQAUser = qaUserList.includes(
      (user.email || '').toLowerCase(),
    )
    const sharedInboxConfig = isQAUser
      ? (JSON.parse(
        requireConfiguration(EnvironmentVariable.SHARED_INBOX_CONFIG_QA),
      ) as Record<string, Array<string>>)
      : (JSON.parse(
        requireConfiguration(EnvironmentVariable.SHARED_INBOX_CONFIG),
      ) as Record<string, Array<string>>)

    console.log(`sharedInboxConfig: ${JSON.stringify(sharedInboxConfig, null, 2)}`)
    const flatListOfSharedInboxRecipients = uniq(
      flatMap(Object.values(sharedInboxConfig)),
    )
    const sharedInboxList = Object.keys(sharedInboxConfig)
    const validatedEmailRecipients: Array<string> = []
    individualEmailAddresses.forEach((address) => {
      if (
        !flatListOfSharedInboxRecipients.includes(address) &&
        !sharedInboxList.includes(address)
      ) {
        validatedEmailRecipients.push(address)
      } else if (sharedInboxList.includes(address)) {
        validatedEmailRecipients.push(...sharedInboxConfig[address])
      }
    })
    console.log(`sharedInboxConfig: ${JSON.stringify(sharedInboxConfig, null, 2)}`)

    // create model input
    const collection: CreateCollectionInput = {
      name,
      id: uuidv4(),
      ownerId,
      createdBy,
      createdAt,
      updatedAt,
      updatedBy,
      collectionDocuments: documentIds.map((documentId) => ({
        documentId,
        createdBy,
        createdAt,
      })),
      grants: validatedEmailRecipients.map((email) => ({
        id: uuidv4(),
        requirementType: CollectionGrantType.IndividualEmail,
        requirementValue: email,
        createdBy,
        createdAt,
        ownerId,
      })),
    }

    // submit audit activity
    await submitCollectionCreatedEvent({
      ownerId,
      user,
      collection,
      documents,
      event,
    })

    // submit model
    const createdCollection = await createCollection(collection)
    if (!createdCollection) {
      throw new createError.InternalServerError(
        'collection could not be created',
      )
    }

    await queueSharedCollectionNotification({
      collection: {
        link: `https://${webAppDomain}/collections/${collection.id}/documents?owner=${ownerId}&role=2`,
        name: userName(user),
      },
      emails: individualEmailAddresses,
      ownerUser: user,
      numberOfDocuments: documents.length,
      isQAUser,
    })

    // return response
    return formatCollectionListItem(createdCollection, [
      CollectionPermission.ListDocuments,
      CollectionPermission.ListGrants,
    ])
  },
)

export default handler
