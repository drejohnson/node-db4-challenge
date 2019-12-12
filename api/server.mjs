import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("<h1>Node DB4 Challenge</h1>");
});

export default server;
