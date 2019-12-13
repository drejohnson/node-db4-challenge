exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          instructions: "Grill it til it's done. Oh, add seasoning",
          recipe_id: 1
        },
        {
          instructions:
            "Chop chop, slice slice, throw it in the blender and enjoy",
          recipe_id: 2
        },
        {
          instructions:
            "Cook dem der beans real good, then magically turn them into a pattie and grill, FTW!",
          recipe_id: 3
        }
      ]);
    });
};
