exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", t => {
      t.increments();
      t.string("name").notNullable();
    })
    .createTable("ingredients", t => {
      t.increments();
      t.string("name").notNullable();
      t.float("quantity").notNullable();
    })
    .createTable("recipe_ingredients", t => {
      t.primary(["recipe_id", "ingredient_id"]);

      // foriegn key
      t.integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      // foriegn key
      t.integer("ingredient_id")
        .unsigned()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("instructions", t => {
      t.increments();
      t.text("instructions").notNullable();

      // foriegn key
      t.integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("instructions");
};
