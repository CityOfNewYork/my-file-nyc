import Knex from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('documents', (t) => {
    t.boolean('isMultipageDocument').defaultTo(false)
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('documents', (t) => {
    t.dropColumns('isMultipageDocument')
  })
}
