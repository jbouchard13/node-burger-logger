// require express router to set up routes
const express = require("express");
const router = express.Router();
// require burger model
const burger = require("../models/burger");

// initial get for home page
router.get("/", (req, res) => {
  // get burger data from db
  // pass this data to handlebars to generate html
  // res.render the data to display it
  res.render("index");
});

module.exports = router;
