/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user").del();
  await knex("user").insert([
    {
      id: "5E1A0766-021C-43F9-9012-46ECE7BAFE90",
      username: "stephlyanie",
      first_name: "Stephanie",
      last_name: "Hall",
      email: "stephanie.anie.hall@gmail.com",
      password: "einaylhpets",
      image_url: "https://images.unsplash.com/photo-1589952283406-b53a7d1347e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVubnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      verified: 0,
    },
    {
      id: "4C3AD130-FED9-4088-9ED7-DEF36BED1939",
      username: "pdrag",
      first_name: "Princess",
      last_name: "Dragon",
      email: "princess@dragon.com",
      password: "gardp",
      image_url: "https://images.unsplash.com/photo-1609151354448-c4a53450c6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVubnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
      verified: 0,
    },
    {
      id: "DADDA3C9-C1F8-4BAF-AC74-05AABED44DD5",
      username: "brains",
      first_name: "BrainStation",
      last_name: "",
      email: "brains@station.com",
      password: "sniarb",
      image_url: "https://images.unsplash.com/photo-1570989086575-503363bb091b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1bm55fGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60",
      verified: 1,
    },
    {
      id: "6A57E038-4301-41C0-A5F9-5AAE681B9510",
      username: "gcbs",
      first_name: "Great Canadian Baking Show",
      last_name: "",
      email: "gc@baking.show",
      password: "sbcg",
      image_url: "https://plus.unsplash.com/premium_photo-1667155652500-aa666676fa39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      verified: 1,
    }
  ]);
};
