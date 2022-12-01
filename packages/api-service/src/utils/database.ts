import { Model } from 'objection'
import Knex from 'knex'
import knexConfig from '@/knexfile'
import { EnvironmentVariable, getConfiguration } from '@/config'

export const connectDatabase = (config?: string) => {
  config = getConfiguration(EnvironmentVariable.NODE_ENV) || 'development'
  console.log('database connection...')
  console.log(config)
  const knex = Knex(knexConfig[config])
  Model.knex(knex)
  console.log('database connection set and ready...')
  return knex
}
