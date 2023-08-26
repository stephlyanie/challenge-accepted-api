/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('creation').del()
  await knex('creation').insert([
    {
      id: "1606CAC9-F0D8-4D01-8AF4-049AE9441C17",
      challenge_id: "C2EA9F0A-93F2-48AE-865A-DFB66F4C5C90",
      name: "Lemon Tart with Fresh Berries",
      description: "A zesty lemon curd atop a pâte sucrée crust with fresh seasonal berries.",
      created_by_id: "5E1A0766-021C-43F9-9012-46ECE7BAFE90",
      image_url: "https://images.unsplash.com/photo-1614174486496-344ef3e9d870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    },
    {
      id: "1F44EA19-34A7-4487-9BE1-62891B5B1B29",
      challenge_id: "9FE7AFAE-29A2-4BC3-998A-6B67D6C1957A",
      name: "S'mores Cake",
      description: "Layers of decadent, moist chocolate cake, marshmallow buttercream, graham cracker brittle covered with milk chocolate frosting and dark chocolate drizzle.",
      created_by_id: "5E1A0766-021C-43F9-9012-46ECE7BAFE90",
      image_url: "https://images.unsplash.com/photo-1621303837383-77d809baf08b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "E4A72E39-EA6A-4C25-9282-891DA7BA591C",
      challenge_id: "88384958-08B7-4F95-B885-FC47A2F7AF56",
      name: "Earl Grey Cupcake Bouquet",
      description: "Earl grey cupcakes with three flavours of botanical buttercream (chamomile, lavender and rose) piped into intricate flowers.",
      created_by_id: "4C3AD130-FED9-4088-9ED7-DEF36BED1939",
      image_url: "https://images.unsplash.com/photo-1521309918586-feb7aa79a61b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN3ZWRpc2glMjBwcmluY2VzcyUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    }
  ]);
};
