import { PartialModelObject } from 'objection'
import BaseModel from './baseModel'

export class User extends BaseModel {
  public id: string
  public givenName?: string
  public familyName?: string
  public email?: string
  public dob?: string
  public dhsCaseNumber?: string
  public locale?: string
  public syncTimestamp?: string
  public attributes?: any

  static get tableName() {
    return 'users'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'string', minLength: 1, maxLength: 40 },
        givenName: { type: 'string', maxLength: 255 },
        familyName: { type: 'string', maxLength: 255 },
        email: { type: 'string', maxLength: 255 },
        dob: { type: 'string', maxLength: 255 },
        dhsCaseNumber: { type: 'string', maxLength: 255 },
        syncTimestamp: { type: 'string', maxLength: 255 },
        locale: { type: 'string', maxLength: 16 },
        attributes: { type: 'object' },
      },
    }
  }
}

export const getUserById = async (id: string): Promise<User | undefined> => {
  return await User.query().findById(id)
}

export const getUsersById = async (ids: string[]): Promise<User[]> => {
  return await User.query().whereIn('id', ids)
}

export const updateUser = async (
  id: string,
  user: PartialModelObject<User>,
) => {
  console.log('update user:')
  console.log(user)
  return await User.query().updateAndFetchById(id, user)
}

export const insertUser = async (user: PartialModelObject<User>) => {
  return await User.query().insertAndFetch(user)
}
