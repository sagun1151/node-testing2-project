
exports.up = async function(knex) {
    await knex.schema.createTable('anime', table => {
      // shortcut for create col 'id' which is primary key with auto-inc integers
      table.increments() // pass the column name if you want different than 'id'
      table.text('name', 128).notNullable()
      table.decimal('rating').notNullable()
      table.boolean('description')
    })
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('fruits')
  };
