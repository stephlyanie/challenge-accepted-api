/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('type', (table) => {
        table.uuid('id').primary();
        table.string('name').notNullable();
        table
            .uuid('category_id')
            .references('category.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('type');
};
