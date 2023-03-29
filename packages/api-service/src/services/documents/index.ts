import {
  Document as DocumentContract,
  DocumentFile as DocumentFileContract,
  FileContentTypeEnum,
  FileDownloadDispositionTypeEnum,
  CollectionGrantType,
} from 'api-client'
import { Document, documentIsInCollectionWithGrant } from '@/models/document'
import { File } from '@/models/file'
import { getPresignedDownloadUrl, getPresignedUploadUrl } from '@/utils/s3'
import { DocumentPermission } from './authorization'
import { emailIsWhitelisted } from '@/utils/whitelist'
import { collectionGrantExistsToOwner } from '@/models/collectionGrant'

export const createLinksForFile = (file: File) => {
  const links: any[] = []
  if (file.received) {
    links.push({
      href: `/documents/${file.documentId}/files/${file.id}/download?disposition=attachment`,
      rel: 'download',
      type: 'GET',
    })
    links.push({
      href: `/documents/${file.documentId}/files/${file.id}/download?disposition=inline`,
      rel: 'preview',
      type: 'GET',
    })
  } else {
    const uploadData = getPresignedUploadUrl(
      file.path,
      file.contentType,
      file.contentLength,
      file.sha256Checksum,
    )
    links.push({
      href: uploadData.url,
      rel: 'upload',
      type: 'POST',
      includeFormData: uploadData.fields,
    })
  }
  return links
}

export const createDocumentListItem = (document: any) => {
  const {
    id,
    name,
    createdAt,
    thumbnailPath,
    isMultipageDocument,
    ownerId,
  } = document

  const links = [
    {
      href: `/documents/${id}`,
      rel: 'self',
      type: 'GET',
    },
  ]

  if (thumbnailPath) {
    const thumbnailLink = getPresignedDownloadUrl(
      thumbnailPath,
      'thumbnail.png',
      FileDownloadDispositionTypeEnum.Inline,
      600, // 10 minute expiry
    )
    links.push({
      href: thumbnailLink,
      rel: 'thumbnail',
      type: 'GET',
    })
  }

  let pdf: string | undefined = undefined
  let pdfThumbnail: string | undefined = undefined
  if (isMultipageDocument) {
    pdf = getPresignedDownloadUrl(
      `documents/${ownerId}/${id}.pdf`,
      `${name}.pdf`,
      FileDownloadDispositionTypeEnum.Inline,
      600,
    )
    pdfThumbnail = getPresignedDownloadUrl(
      `documents/${ownerId}/${id}.png`,
      'multipage-doc-thumbnail.png',
      FileDownloadDispositionTypeEnum.Inline,
      600,
    )
  }

  return {
    name,
    isMultipageDocument,
    pdf,
    pdfThumbnail,
    createdDate: createdAt.toISOString(),
    id,
    links,
  }
}

export const singleDocumentResult = (
  document: Document,
  permissions: DocumentPermission[],
): DocumentContract => {
  const {
    id,
    name,
    createdAt,
    thumbnailPath,
    files: baseFiles,
    description = null,
    isMultipageDocument,
    ownerId,
  } = document

  const links = [
    {
      href: `/documents/${id}`,
      rel: 'self',
      type: 'GET',
    },
  ]
  if (permissions.includes(DocumentPermission.WriteDocument)) {
    links.push({
      href: `/documents/${id}`,
      rel: 'update',
      type: 'PUT',
    })
  }
  if (permissions.includes(DocumentPermission.DeleteDocument)) {
    links.push({
      href: `/documents/${id}`,
      rel: 'delete',
      type: 'DELETE',
    })
  }

  const files = baseFiles ? baseFiles : []
  let pdf: string | undefined = undefined
  let pdfThumbnail: string | undefined = undefined
  if (isMultipageDocument) {
    pdf = getPresignedDownloadUrl(
      `documents/${ownerId}/${id}.pdf`,
      `${name}.pdf`,
      FileDownloadDispositionTypeEnum.Inline,
      600,
    )
    pdfThumbnail = getPresignedDownloadUrl(
      `documents/${ownerId}/${id}.png`,
      'multipage-doc-thumbnail.png',
      FileDownloadDispositionTypeEnum.Inline,
      600,
    )
  }

  return {
    createdDate: createdAt.toISOString(),
    name,
    description,
    id,
    scanStatus: document.scanStatus,
    isMultipageDocument,
    pdf,
    pdfThumbnail,
    files: files.map(
      (f): DocumentFileContract => ({
        id: f.id,
        createdDate: f.createdAt.toISOString(),
        links: createLinksForFile(f),
        name: f.name,
        sha256Checksum: f.sha256Checksum,
        contentType: f.contentType as FileContentTypeEnum,
        contentLength: f.contentLength,
        scanStatus: document.scanStatus,
      }),
    ),
    links: links,
  }
}

export const hasAccessToDocumentViaCollectionGrant = async (
  documentId: string,
  userEmail: string,
) => {
  return (
    emailIsWhitelisted(userEmail) &&
    (await documentIsInCollectionWithGrant(
      documentId,
      CollectionGrantType.IndividualEmail,
      userEmail,
    ))
  )
}

export const hasAnyGrantToUsersCollections = async (
  ownerUserId: string,
  accessingUserEmail: string,
) => {
  return (
    emailIsWhitelisted(accessingUserEmail) &&
    (await collectionGrantExistsToOwner(
      ownerUserId,
      CollectionGrantType.IndividualEmail,
      accessingUserEmail,
    ))
  )
}
