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

// delete route --> ERROR (not rendering json)
turtlesRouter.delete("/:id", (req, res) => {
  Turtle.findByIdAndDelete(req.params.id, (error, deletedTurtle) => {
    res.json(deletedTurtle);
  });
});

// update route --> ERROR (not rendering json)
turtlesRouter.put("/:id", (req, res) => {
  Turtle.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedTurtle) => {
      res.json(updatedTurtle);
    }
  );
});

// create route
turtlesRouter.post("/", (req, res) => {
  Turtle.create(req.body, (err, newTurtle) => {
    res.json(allTurtles);
  });
});

// edit route

// show route --> ERROR (not rendering json)
turtlesRouter.get("/:id", (req, res) => {
  Turtle.findById(req.params.id, (err, foundTurtle) => {
    res.json(foundTurtle);
  });
});

module.exports = turtlesRouter;
