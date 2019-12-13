exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "soy sauce" },
        { name: "salmon" },
        { name: "brown sugar" },
        { name: "olive oil" },
        { name: "honey" },
        { name: "black beans" },
        { name: "lettuce" },
        { name: "tomatos" },
        { name: "rice" },
        { name: "kale" },
        { name: "pineapple" },
        { name: "apple" },
        { name: "ginger" }
      ]);
    });
};
