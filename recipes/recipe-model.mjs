import db from "../data/db-config.js";

function findRecipes() {
  return db("recipes");
}

function findRecipeById(id) {
  return db("recipes")
    .where({ id })
    .first();
}

function findShoppingList(id) {
  return db("recipe_ingredients as rs")
    .join("ingredients as i", "rs.ingredient_id", "i.id")
    .select("i.name", "rs.quantity")
    .where({ recipe_id: id });
}

function findInstructions(id) {
  return db("recipe_instructions as ri")
    .select("ri.step_number", "ri.instructions")
    .where({ recipe_id: id });
}

export default { findRecipes, findRecipeById };
