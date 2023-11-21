import {
  DocumentsDownloadCreate,
  DocumentsDownload,
  DocumentsDownloadStatusEnum,
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
import { getDocumentById } from '@/models/document'
import { getFilesByDocumentId } from '@/models/file'
import { resolveFileName } from '@/utils/fileNamer'
import { S3ObjectDetails, createS3ZipFromS3Objects } from '@/utils/zip'

connectDatabase()

const createCollectionZip = async (event: CreateCollectionZipEvent) => {
  // fetch collection
  const { collectionId, userId } = event

  // read in documents
  const { documents, documentsHash } = await getCollectionDetails(
    collectionId,
  )
  const downloadPath = `${CollectionsPrefix}/${collectionId}/${documentsHash}`

  // prepare file streams of files already in s3
  const fileNames = new Set<string>()
  const s3Objects: S3ObjectDetails[] = []
  for (const document of documents) {
    if (document.isMultipageDocument) {
      const fetchedDocument = await getDocumentById(document.id)
      if (fetchedDocument) {
        // create stream for file
        s3Objects.push({
          key: `documents/${fetchedDocument.ownerId}/${document.id}.pdf`,
          filename: `${document.name}.pdf`,
        })
      }
    } else {
      // get received files for a document
      const files = (await getFilesByDocumentId(document.id)).filter(
        (f) => f.received,
      )
      // create stream for file
      s3Objects.push(
        ...files.map((f) => {
          const filename = resolveFileName(document, f, files.length, fileNames)
          fileNames.add(filename)
          return {
            key: f.path,
            filename,
          }
        }),
      )
    }
  }

  console.log(`S3 Objects for Archive:
  ${JSON.stringify(s3Objects, null, 2)}
  `)

  // stream files into zip
  return await createS3ZipFromS3Objects({
    key: downloadPath,
    objects: s3Objects,
    tags: `CreatedBy=${userId}`,
  })
}

export const handler = createAuthenticatedApiGatewayHandler(
  setContext('collectionId', (r) =>
    requirePathParameter(r.event, 'collectionId'),
  ),
  requirePermissionToCollection(CollectionPermission.DownloadDocuments),
  requireValidBody<DocumentsDownloadCreate>(downloadCollectionDocumentsSchema),
  async (
    request: APIGatewayRequestBody<DocumentsDownloadCreate>,
  ): Promise<DocumentsDownload> => {
    const { collectionId, userId, collection, user, event } = request

    // read in documents
    const { documents, documentsHash } = await getCollectionDetails(
      collectionId,
    )
    const downloadPath = `${CollectionsPrefix}/${collectionId}/${documentsHash}`
    console.log(`downloadCollectionDocuments:
      ${downloadPath}
    `);

    if (await objectExists(downloadPath)) {
      // zip already prepared, submit audit activity data
      await submitCollectionDownloaded(collection, documents, event, user)

      // return file access
      return {
        id: documentsHash,
        status: DocumentsDownloadStatusEnum.Success,
        fileDownload: {
          href: getPresignedDownloadUrl(
            downloadPath,
            collection.name + '.zip',
            'attachment',
          ),
        },
      }
    }

    const functionName = requireConfiguration(
      EnvironmentVariable.CREATE_COLLECTION_ZIP_FUNCTION_NAME,
    )
    // await invokeFunction<CreateCollectionZipEvent>(functionName, {
    //   collectionId,
    //   userId,
    // })
    await createCollectionZip({
      collectionId,
      userId,
    })

    // return handle to file
    return {
      id: documentsHash,
      status: DocumentsDownloadStatusEnum.Pending,
      fileDownload: null,
    }
  },
)

export default handler
