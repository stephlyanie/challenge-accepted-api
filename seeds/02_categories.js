/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('category').del()
  await knex('category').insert([
    {
      id: "8D936DED-A8CB-4B5D-96D1-74F165D5A2AA",
      name: "Baking",
    }
  ]);
};
