// Import Express
const express = require("express");

// Create an instance of express
const app = express();

// Variable for the port
const port = 3000;

// Bottles of beer
let bottlesOfBeer = 99;

// Main route
app.get("/", (req, res) => {
  res.send(`<h2>${bottlesOfBeer} bottles of beer on the wall</h2>
    <a href='/${bottlesOfBeer - 1}'>Take one down and pass it around!</a>`);
});

app.get("/:number", (req, res) => {
  bottlesOfBeer = Number(req.params.number);
  res.send(`<h2>${bottlesOfBeer} bottles of beer on the wall</h2>
      <a href='/${bottlesOfBeer - 1}'>Take one down and pass it around!</a>`);
});

// Listen on the port
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
