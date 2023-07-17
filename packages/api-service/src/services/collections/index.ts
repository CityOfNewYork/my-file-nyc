import { Collection, getDocumentsByCollectionId } from '@/models/collection'
import { collectionGrantExists } from '@/models/collectionGrant'
import { getFilesByDocumentIds } from '@/models/file'
import { User } from '@/models/user'
import { hashString } from '@/utils/string'
import { emailIsWhitelisted } from '@/utils/whitelist'
import {
  CollectionGrantType,
  CollectionListItem,
  Link,
  SharedCollectionList,
  SharedCollectionListItem,
} from 'api-client'
import { submitDocumentsAccessedEvent } from '../activity'
import { userToApiOwner, userToApiSharer } from '../users'
import { CollectionPermission } from './authorization'
import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { Document } from '@/models/document'
import { CollectionDocument } from '@/models/collectionDocument'
import dayjs from 'dayjs'

export const formatCollectionListItem = (
  collection: Collection,
  permissions: CollectionPermission[],
): CollectionListItem => {
  const { id, name, status, createdAt, } = collection
  const links: Link[] = []
  if (permissions.includes(CollectionPermission.ListDocuments)) {
    links.push({
      href: `/collections/${id}/documents`,
      rel: 'documents',
      type: 'GET',
    })
  }
  if (permissions.includes(CollectionPermission.ListGrants)) {
    links.push({
      href: `/collections/${id}/grants`,
      rel: 'grants',
      type: 'GET',
    })
  }
  return {
    name,
    status,
    createdDate: createdAt.toISOString(),
    id,
    links,
  }
}
export const formatCollections = async (
  collections: Collection[],
  permissions: CollectionPermission[],
) => {

  const collectionDocumentCount = await CollectionDocument.query()
    .select('collectionId')
    .count('documentId', { as: 'numberOfDocuments' })
    .groupBy('collectionId');

  console.log('Collection Document Count Grouping:')
  console.log(JSON.stringify(collectionDocumentCount, null, 2))
  const formattedCollectionItems = collections
    .map((c) => formatCollectionListItem(c, permissions))
    .map((c) => {
      const numberOfDocuments = (collectionDocumentCount.find((cdc) => cdc.collectionId === c.id) as any || { numberOfDocuments: 0 }).numberOfDocuments;
      return {
        ...c,
        name: `${numberOfDocuments} documents shared on ${dayjs(new Date(c.createdDate)).format('ll [at] hh:mm')}`,
        numberOfDocuments,
      }
    })

  return {
    collections: formattedCollectionItems,
  }
}

export const formatSharedCollections = async (
  collections: Collection[],
  users: User[],
  permissions: CollectionPermission[],
): Promise<SharedCollectionList> => {

  const collectionDocumentCount = await CollectionDocument.query()
    .select('collectionId')
    .count('documentId', { as: 'numberOfDocuments' })
    .groupBy('collectionId');

  return {
    sharedCollections: collections
      .map((c): SharedCollectionListItem | null => {
        const { ownerId, createdBy, createdAt } = c
        const owner = users.find((u) => u.id == ownerId)
        const sharer = users.find((u) => u.id == createdBy)
        const numberOfDocuments = (collectionDocumentCount.find((cdc) => cdc.collectionId === c.id) as any || { numberOfDocuments: 0 }).numberOfDocuments;
        if (!owner || !sharer) {
          return null
        }
        return {
          collection: {
            ...formatCollectionListItem(c, permissions),
            name: `${numberOfDocuments} documents shared on ${dayjs(new Date(c.createdAt)).format('ll [at] hh:mm')}`,
            numberOfDocuments,
          },
          owner: userToApiOwner(owner),
          shareInformation: {
            sharedBy: userToApiSharer(sharer),
            sharedDate: createdAt.toISOString(),
          },
        }
      })
      .filter((c) => c !== null) as SharedCollectionListItem[],
  }
}

export const getCollectionDetails = async (collectionId: string) => {
  // read in documents
  const documents = await getDocumentsByCollectionId(collectionId)

  // create a consistent hash that can be used as the download file name
  const documentsHash = hashString(
    collectionId +
    ':' +
    documents.map((d) => d.id + d.updatedAt.toUTCString()).join(':'),
  )

  return {
    documents,
    documentsHash,
  }
}

export const submitCollectionDownloaded = async (
  collection: Collection,
  documents: Document[],
  event: APIGatewayProxyEventV2,
  user: User,
) => {
  const files = await getFilesByDocumentIds(documents.map(({ id }) => id))
  await submitDocumentsAccessedEvent({
    ownerId: collection.ownerId,
    event,
    user,
    documents: documents.map((d) => ({
      document: d,
      files: files.filter((f) => f.documentId === d.id),
    })),
  })
}

export const hasAccessToCollectionViaGrant = async (
  collectionId: string,
  userEmail: string,
) => {
  return (
    emailIsWhitelisted(userEmail) &&
    (await collectionGrantExists(
      collectionId,
      CollectionGrantType.IndividualEmail,
      userEmail,
    ))
  )
}
