// Require dependencies
const express = require("express");
const mongoose = require("mongoose");
const turtleController = require("./controllers/turtles");

// Initialize application
const app = express();

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

// Mount router middleware
app.use("/turtles", turtleController);

// Tell app to listen on PORT
app.listen(PORT, () => {
  console.log("Express is listening on port " + PORT);
});
