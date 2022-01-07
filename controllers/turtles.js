// Require dependencies
const express = require("express");

// Set up router object
const turtlesRouter = express.Router();

// Import Turtle model
const Turtle = require("../models/Turtle");

// Import seed data
const turtleSeed = require("../models/turtleSeed");

// seed route
turtlesRouter.get("/seed", (req, res) => {
  Turtle.deleteMany({}, (err, deletedTurtles) => {
    Turtle.create(turtleSeed, (err, allTurtles) => {
      res.redirect("/turtles");
    });
  });
});

// index route
turtlesRouter.get("/", (req, res) => {
  Turtle.find({}, (err, allTurtles) => {
    res.json(allTurtles);
  });
});

// new route

// delete route

// update route

// create route
turtlesRouter.post("/", (req, res) => {
  Turtle.create(req.body, (err, newTurtle) => {
    Turtle.find({}, (err, allTurtles) => {
      res.json(allTurtles);
    });
  });
});

// edit rotue

// show route

module.exports = turtlesRouter;
