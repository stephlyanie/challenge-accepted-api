/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('challenge', (table) => {
      table.uuid('id').primary();
      table.string('name').notNullable();
      table.string('description').notNullable();
      table
        .uuid('created_by_id')
        .references('user.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .uuid('type_id')
        .references('type.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('image_url').notNullable().defaultTo("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949");
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
      return knex.schema.dropTable('challenge');
  };
  