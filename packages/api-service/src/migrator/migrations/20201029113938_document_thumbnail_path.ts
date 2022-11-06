import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.migrate.forceFreeMigrationsLock();
  return knex.schema.alterTable('documents', (t) => {
    t.string('thumbnailPath', 500).nullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.migrate.forceFreeMigrationsLock();
  return knex.schema.alterTable('documents', (t) => {
    t.dropColumns('thumbnailPath')
  })
}
