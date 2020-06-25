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

router.post("/api/burgers", (req, res) => {
  // call the create function
  // refresh the index page with updated info
});

router.put("api/burgers/:id?", (req, res) => {
  // set the url param to a variable
  const condition = req.params.id;
  // call the update function to update a burger to be devoured:true
});

module.exports = router;
