// require express router to set up routes
const express = require("express");
const router = express.Router();
// require burger model
const burger = require("../models/burger");

// initial get for home page
router.get("/", (req, res) => {
  // get burger data from db
  burger.selectAll((data) => {
    const hbData = {
      burgers: data,
    };
    console.log(hbData);
    // pass this data to handlebars to generate html
    // res.render the data to display it
    res.render("index", hbData);
  });
});

router.post("/api/burgers", (req, res) => {
  if (req.body.burger_name === "") {
    // make sure the request has data
    return res
      .status(404)
      .json({ errorMsg: "Please be sure to type in a burger" })
      .end();
  } else {
    // call the create function
    burger.insertOne(req.body, (result) => {
      res.status(200).end();
    });
  }
});

router.put("api/burgers/:id?", (req, res) => {
  // set the url param to a variable
  const condition = req.params.id;
  // call the update function to update a burger to be devoured:true
});

module.exports = router;
