import BaseModel from './baseModel'
import { v4 as uuidv4 } from 'uuid'
import { Model, QueryBuilder } from 'objection'

export class File extends BaseModel {
  public id: string
  public documentId: string
  public name: string
  public path: string
  public order: number
  public received: boolean
  public contentType: string
  public contentLength: number
  public sha256Checksum: string
  public createdAt: Date
  public createdBy: string
  public scanStatus: string

  static get tableName() {
    return 'files'
  }

  static get modifiers() {
    return {
      byDocumentId(query: QueryBuilder<File>, documentId: string) {
        return query.where({
          documentId,
        })
      },
      byId(query: QueryBuilder<File>, id: string) {
        return query.where({
          id,
        }).first
      },
    }
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'documentId',
        'name',
        'path',
        'received',
        'contentType',
        'contentLength',
        'sha256Checksum',
        'createdAt',
        'createdBy',
      ],
      properties: {
        id: { type: 'string', minLength: 1, maxLength: 40 },
        documentId: { type: 'string', minLength: 1, maxLength: 40 },
        name: { type: 'string', maxLength: 255 },
        path: { type: 'string', maxLength: 500 },
        order: { type: 'number' },
        received: { type: 'boolean' },
        contentType: { type: 'string', maxLength: 255 },
        scanStatus: { type: 'string', maxLength: 255 },
        contentLength: {
          type: 'integer',
          minimum: 1,
          maximum: 10 * 1024 * 1024,
        },
        sha256Checksum: { type: 'string', maxLength: 255 },
        createdAt: { type: 'date-time' },
        createdBy: { type: 'string', maxLength: 255 },
      },
    }
  }

  static get relationMappings() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Document = require('./document').Document
    return {
      document: {
        relation: Model.BelongsToOneRelation,
        modelClass: Document,
        join: {
          from: `${File.tableName}.documentId`,
          to: `${Document.tableName}.id`,
        },
      },
    }
  }

  async $beforeInsert() {
    if (!this.id) this.$id(uuidv4())
  }
}

export const markFileReceived = async (path: string) => {
  await File.query()
    .patch({ received: true })
    .where({ path })
  return await File.query()
    .where({ path })
    .first()
}

export const getFileByIdAndDocumentId = async (
  fileId: string,
  documentId: string,
) => {
  const file = await File.query()
    .where({
      id: fileId,
      documentId,
    })
    .first()
  return file ? file : null
}
export const getFileById = async (fileId: string) => {
  const file = await File.query()
    .where({
      id: fileId,
    })
    .first()
  return file ? file : null
}

export const getFilesByDocumentId = async (documentId: string) => {
  return await File.query()
    .where({ documentId })
    .orderBy('order')
}

export const getFilesByDocumentIds = async (documentIds: string[]) => {
  return await File.query()
    .whereIn('documentId', documentIds)
    .orderBy('order')
}
export interface FileScanStatus {
  fileId: string
  scanStatus: string
}
// This should be invoked by the AntiVirus Lambda
export const updateScanStatusByFileId = async (
  fileScanStatus: FileScanStatus,
) => {
  await File.query()
    .patch({ scanStatus: fileScanStatus.scanStatus })
    .where({ id: fileScanStatus.fileId })
}

export interface DocumentScanStatus {
  documentId: string
  scanStatus: string
}
// This should be invoked by the AntiVirus Lambda
export const updateScanStatusByDocumentId = async (
  documentScanStatus: DocumentScanStatus,
) => {
  await File.query()
    .patch({ scanStatus: documentScanStatus.scanStatus })
    .where({ documentId: documentScanStatus.documentId })
}
