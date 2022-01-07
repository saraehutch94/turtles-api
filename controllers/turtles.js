// Require dependencies
const express = require("express");

// Set up router object
const turtlesRouter = express.Router();

// Import Turtle model
const Turtle = require("../models/Turtle");

// Import seed data
const turtleSeed = require("../models/turtleSeed");

// seed route
turtlesRouter.get("/turtles/seed", (req, res) => {
  Turtle.deleteMany({}, (err, deletedTurtles) => {
    Turtle.create(turtleSeed, (err, allTurtles) => {
      res.redirect("/turtles");
    });
  });
});
