import Knex from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('users', (t) => {
    t.string('locale', 255).nullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('users', (t) => {
    t.dropColumns('locale')
  })
}
