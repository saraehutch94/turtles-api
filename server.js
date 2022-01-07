// Require dependencies
const express = require("express");

// Initialize application
const app = express();

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

// Mount middleware

// Tell app to listen on PORT
app.listen(PORT, () => {
  console.log("Express is listening on port " + PORT);
});
