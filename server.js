// Import Express
const express = require("express");

// Create an instance of express
const app = express();

// Variable for the port
const port = 3000;

// Main route
app.get("/", (req, res) => {
  // Bottles of beer
  let bottlesOfBeer = 99;

  res.send(`<h2>${bottlesOfBeer} bottles of beer on the wall</h2>
    <a href='/${bottlesOfBeer - 1}'>Take one down and pass it around!</a>`);
});

app.get("/:number", (req, res) => {
  bottlesOfBeer = Number(req.params.number);
  let link;

  bottlesOfBeer > 0
    ? (link = `<a href='/${
        bottlesOfBeer - 1
      }'>Take one down and pass it around!</a>`)
    : (link = `<a href='/'>Start over from the top?</a>`);

  res.send(`<h2>${bottlesOfBeer} bottles of beer on the wall</h2>
      ${link}`);
});

// Listen on the port
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
