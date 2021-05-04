exports.up = function (knex, Promise) {
  return knex.schema.createTable('notes', function (table) {
    table.increments()
    table.string('title').notNullable()
    table.string('region')
    table.string('event_date')
    table.string('description')
    table.boolean('is_complete').notNullable().defaultTo(false)
    table.string('user_id').references('hash_id').inTable('users')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('notes')
}
