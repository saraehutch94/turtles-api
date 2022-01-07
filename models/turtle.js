// Require dependencies
const mongoose = require("mongoose");

// Shorter Schema variable
const Schema = mongoose.Schema;

// Set up mongoose Schema

const turtleSchema = new Schema(
  {
    name: String,
    role: String,
  },
  { timestamps: true }
);

// Export Turtle model

module.exports = mongoose.model("Turtle", turtleSchema);
