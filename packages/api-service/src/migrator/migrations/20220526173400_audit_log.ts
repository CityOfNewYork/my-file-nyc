import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.migrate.forceFreeMigrationsLock();
  return knex.schema.createTable('auditLog', (t) => {
    t.string('id', 40).primary()
    t.json('eventData')
    t.string('userId')
    t.timestamp('createTimestamp').defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.migrate.forceFreeMigrationsLock();
  return knex.schema.dropTable('auditLog')
}
