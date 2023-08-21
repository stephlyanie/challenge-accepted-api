/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('type').del()
  await knex('type').insert([
    {
      id: "345E5ED3-1D44-493F-B4F9-0820D7FF6DEF",
      name: "Cake",
      category_id: "8D936DED-A8CB-4B5D-96D1-74F165D5A2AA"
    },
    {
      id: "B5BC1303-F296-4CB1-A3E8-EE739372B152",
      name: "Bread",
      category_id: "8D936DED-A8CB-4B5D-96D1-74F165D5A2AA"
    },
    {
      id: "728CB108-5153-4631-8A9D-864A4D22BD5C",
      name: "Biscuits",
      category_id: "8D936DED-A8CB-4B5D-96D1-74F165D5A2AA"
    },
    {
      id: "CC0BF904-43D0-4E9C-8D13-D292CC31E518",
      name: "Pastry",
      category_id: "8D936DED-A8CB-4B5D-96D1-74F165D5A2AA"
    }
  ]);
};