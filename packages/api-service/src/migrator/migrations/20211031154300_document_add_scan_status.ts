import Knex from 'knex'

export async function up(knex: Knex): Promise<void> {
  
  return knex.schema.alterTable('documents', (t) => {
    t.string('scanStatus', 255).defaultTo('unscanned')
  })
}

export async function down(knex: Knex): Promise<void> {
  
  return knex.schema.alterTable('documents', (t) => {
    t.dropColumns('scanStatus')
  })
}
