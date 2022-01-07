// Require dependencies
const express = require("express");

// Set up router object
const turtlesRouter = express.Router();

// Import Turtle model
const Turtle = require("../models/Turtle");

// seed route
turtlesRouter.get("/turtles/seed", (req, res) => {});
