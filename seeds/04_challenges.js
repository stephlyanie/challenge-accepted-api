/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('challenge').del()
  await knex('challenge').insert([
    {
      id: "E55AB825-9FDE-438C-984F-2C34FE04CF95",
      name: "Make Anything",
      description: "Make something cool, surprise us.",
      created_by_id: "DADDA3C9-C1F8-4BAF-AC74-05AABED44DD5",
      type_id: "A66FF24C-A1DA-4B59-923D-7300CB952D64",
      image_url: "https://images.unsplash.com/photo-1540660290370-8aa90e451e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: "9FE7AFAE-29A2-4BC3-998A-6B67D6C1957A",
      name: "Chocolate Layer Cake",
      description: "Make a chocolate layer cake containing at least two layers and at least two different kinds of chocolate.",
      created_by_id: "6A57E038-4301-41C0-A5F9-5AAE681B9510",
      type_id: "345E5ED3-1D44-493F-B4F9-0820D7FF6DEF",
      image_url: "https://images.unsplash.com/photo-1540337706094-da10342c93d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNob2NvbGF0ZSUyMGxheWVyJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: "88384958-08B7-4F95-B885-FC47A2F7AF56",
      name: "24 Cupcakes in Two Hours",
      description: "With a two-hour time limit, make 24 expertly decorated cupcakes.",
      created_by_id: "6A57E038-4301-41C0-A5F9-5AAE681B9510",
      type_id: "345E5ED3-1D44-493F-B4F9-0820D7FF6DEF",
      image_url: "https://plus.unsplash.com/premium_photo-1663839412403-c6825fc1a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGN1cGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: "F7C11B5C-FB65-47C3-AE9E-5B5B219B4F2D",
      name: "Foccacia Art",
      description: "Make foccacia bread art.",
      created_by_id: "6A57E038-4301-41C0-A5F9-5AAE681B9510",
      type_id: "B5BC1303-F296-4CB1-A3E8-EE739372B152",
      image_url: "https://images.unsplash.com/photo-1636367989765-db1ebdae1408?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9jY2FjaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: "C2EA9F0A-93F2-48AE-865A-DFB66F4C5C90",
      name: "Elegant Sweet Tart",
      description: "Make an elegant looking sweet tart or pie with some sort of short crust pastry.",
      created_by_id: "6A57E038-4301-41C0-A5F9-5AAE681B9510",
      type_id: "CC0BF904-43D0-4E9C-8D13-D292CC31E518",
      image_url: "https://images.unsplash.com/photo-1560180474-e8563fd75bab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    }
  ]);
};

