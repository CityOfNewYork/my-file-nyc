import Knex from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('collections', (t) => {
    t.string('status').defaultTo('pending')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('collections', (t) => {
    t.dropColumns('status')
  })
}
