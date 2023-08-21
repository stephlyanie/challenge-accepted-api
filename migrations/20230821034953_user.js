/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('user', (table) => {
        table.uuid('id').primary();
        table.string('username').notNullable();
        table.string('first_name').notNullable();
        table.string('last_name').nullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('image_url').notNullable().defaultTo("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949");
        table.boolean('verified').notNullable().defaultTo(0);
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
