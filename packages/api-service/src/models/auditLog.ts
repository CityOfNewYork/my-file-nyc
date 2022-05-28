import BaseModel from './baseModel'
import { v4 as uuidv4 } from 'uuid'
import { Model } from 'objection'
import { AgencyGrant } from './agencyGrant'

export class AuditLog extends BaseModel {
  // columns
  public id: string
  public eventData: string
  public userId: string
  public createTimestamp: number

  static get tableName() {
    return 'auditLog'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['eventData', 'userId'],
      properties: {
        id: { type: 'string', minLength: 1, maxLength: 40 },
        eventData: { type: 'text' },
        userId: { type: 'string' },
        createTimestamp: { type: 'timestamp' },
      },
    }
  }

  async $beforeInsert() {
    if (!this.id) this.$id(uuidv4())
  }
}

export type AuditLogType = {
  id?: string,
  eventData: string,
  userId: string,
  createTimestamp?: number,
}

export const createAuditLog = async (auditLogRecord: AuditLogType) => {
  return await AuditLog.query().insertGraph({
    ...auditLogRecord,
  })
}

export const getAuditLogByUserId = async (userId: string) => {
  return await AuditLog.query()
    .select('id', 'eventData', 'userId', 'createTimestamp')
    .where('userId', userId)
    .orderBy('createTimestamp', 'DESC')
}