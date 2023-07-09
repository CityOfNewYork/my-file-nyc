import {
  DocumentsDownloadCreate,
  DocumentsDownload,
  DocumentsDownloadStatusEnum,
  CollectionStatusPatch,
  Collection as CollectionResponse,
} from 'api-client'
import { requirePathParameter } from '@/utils/api-gateway'
import { connectDatabase } from '@/utils/database'
import { downloadCollectionDocumentsSchema } from './validation'
import {
  setContext,
  APIGatewayRequestBody,
  requireValidBody,
} from '@/utils/middleware'
import {
  CollectionPermission,
  requirePermissionToCollection,
} from './authorization'
import { CollectionsPrefix } from '@/constants'
import { getPresignedDownloadUrl, objectExists } from '@/utils/s3'
import {
  getCollectionDetails,
  submitCollectionDownloaded,
} from '@/services/collections'
import { EnvironmentVariable, requireConfiguration } from '@/config'
import { invokeFunction } from '@/utils/lambda'
import { CreateCollectionZipEvent } from './createCollectionZip'
import { createAuthenticatedApiGatewayHandler } from '@/services/users/middleware'
import { Collection } from '@/models/collection'
import createHttpError from 'http-errors'

connectDatabase()

export const handler = createAuthenticatedApiGatewayHandler(
  setContext('collectionId', (r) =>
    requirePathParameter(r.event, 'collectionId'),
  ),
  // requirePermissionToCollection(CollectionPermission.DownloadDocuments),
  async (
    request: APIGatewayRequestBody<CollectionStatusPatch>,
  ): Promise<Collection> => {
    console.log(request)
    const { collectionId, event: { body = '{}' } } = request
    const { status } = JSON.parse(body);
    const collection = await Collection.query().select().where({ id: collectionId });
    
    console.log(`found collection: 
    ${JSON.stringify(collection, null, 2)}
    `)
    
    if (!collection || collection.length === 0) {
      throw createHttpError(404, `Collection for id ${collectionId} does not exist.`)
    }
    
    const { name, ownerId, createdBy, updatedBy } = collection[0];
    const updatePayload = { status, name, ownerId, createdBy, updatedBy };
    console.log(`update payload:
    ${JSON.stringify(updatePayload, null, 2)}
    `)
    const updatedCollection = await Collection.query().updateAndFetchById(collectionId, updatePayload)

    console.log(`updated collection: 
    ${JSON.stringify(updatedCollection, null, 2)}
    `)

    // return handle to file
    return updatedCollection
  },
)

export default handler
