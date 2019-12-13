import express from "express";
import recipeRouter from "../recipes/recipe-router.mjs";

const server = express();

server.use(express.json());

server.use("/api/recipes", recipeRouter);

server.get("/", (req, res) => {
  res.send("<h1>Node DB4 Challenge</h1>");
});

export default server;
