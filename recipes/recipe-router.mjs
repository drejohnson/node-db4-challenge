import express from "express";
import Recipes from "./recipe-model.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.findRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Recipes could not be retrieved." });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await Recipes.findRecipeById(id);
    if (!recipe)
      return res.status(404).json(`recipe with id of ${id} could not be found`);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ error: "Recipe could not be retrieved." });
  }
});

export default router;
