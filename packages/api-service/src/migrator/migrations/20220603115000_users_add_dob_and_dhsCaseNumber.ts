import Knex from 'knex'

export async function up(knex: Knex): Promise<void> {
  
  return knex.schema.alterTable('users', (t) => {
    t.string('dob', 255).nullable()
    t.string('dhsCaseNumber', 255).nullable()
    t.string('locale', 16).nullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  
  return knex.schema.alterTable('users', (t) => {
    t.dropColumns('dob', 'dhsCaseNumber', 'locale')
  })
}
