import Knex from 'knex'

interface Event {
  readonly RequestType: 'Create' | 'Update' | 'Delete'
  readonly ResourceProperties?: { [key: string]: any }
  readonly OldResourceProperties?: { [key: string]: any }
  readonly PhysicalResourceId?: string
}

interface Response {
  readonly PhysicalResourceId?: string
  readonly Data?: { [name: string]: any }
}

export type EventHandler = (event: Event) => Promise<Response | undefined>

export const handler: EventHandler = async (event: Event) => {
  console.log('Received:\n', event)

  const response = {
    PhysicalResourceId: 'db-migrator',
  }

  if (event.RequestType == 'Delete') {
    // skip delete events
    console.log('Skipping delete event.')
  } else if (['Create', 'Update'].includes(event.RequestType)) {
    const knexConfig = {
      client: 'mysql2',
      debug: true,
      connection: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: `${__dirname}/migrations`,
      },
      disableTransactions: true,
    }
  
    console.log(knexConfig)
    console.log(`>>> Running migration to latest ${(new Date()).toISOString()}`)
    const knex = Knex(knexConfig)
    await knex.migrate.forceFreeMigrationsLock()
    await knex.migrate.latest()
  }
  return response;
}

handler({} as Event);