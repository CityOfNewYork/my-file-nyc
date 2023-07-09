import Knex from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('documents', (t) => {
    t.string('status').defaultTo('pending')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('documents', (t) => {
    t.dropColumns('status')
  })
}
