// Require dependencies
const express = require("express");

// Initialize application
const app = express();

// Turtle data
const turtles = [
  { name: "Leonardo", role: "ninja" },
  { name: "Michaelangelo", role: "ninja" },
  { name: "Donatello", role: "ninja" },
  { name: "Raphael", role: "ninja" },
];

// Configure application settings

require("dotenv").config();

const PORT = process.env.PORT;

// Mount routes

// home route
app.get("/", (req, res) => {
  res.json({
    response: "Hello World!",
  });
});

// index route
app.get("/turtles", (req, res) => {
  res.json(turtles);
});

// show route
app.get("/turtles/:index", (req, res) => {
  res.json(turtles[req.params.index]);
});

// Mount middleware

// Tell app to listen on PORT
app.listen(PORT, () => {
  console.log("Express is listening on port " + PORT);
});
