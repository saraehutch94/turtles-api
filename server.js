// Require dependencies
const express = require("express");
const mongoose = require("mongoose");

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

const { DATABASE_URL, PORT } = process.env;

// Connection to database

mongoose.connect(DATABASE_URL);

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("Error: " + error);
});

db.on("connected", () => {
  console.log("mongoDB connected");
});

db.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

// Mount middleware

app.use(express.json());

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

// delete route
app.delete("/turtles/:id", (req, res) => {
  turtles.splice(req.params.id, 1);
  res.json(turtles);
});

// update route
app.put("/turtles/:id", (req, res) => {
  turtles[req.params.id] = req.body;
  res.json(turtles);
});

// create route
app.post("/turtles", (req, res) => {
  turtles.push(req.body);
  res.json(turtles);
});

// show route
app.get("/turtles/:id", (req, res) => {
  res.json(turtles[req.params.id]);
});

// Tell app to listen on PORT
app.listen(PORT, () => {
  console.log("Express is listening on port " + PORT);
});
