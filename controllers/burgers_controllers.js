var express = require("express");
// now we're using the express router
// We are creating actions that are going to fire off as a route
// you have routes delinated and each of them will be correlated into a controller file which will be required into your server file 
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// We're going ot have a route of slash 
router.get("/", function (req, res) {
  // when it runs we want it to get and run this command in burger
  // we've created an ORM, it has a function called all
  // that function will return some data
  // we are depending on mySQL to return a query to us
  //once we have the data we are making a handlebars object
  burger.all(function (data) {
    var hbsObject = {
      //burgers is a property in the array of objects...the data are arrays of objects from the DB
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
//inserting
router.post("/api/burger/new", function (req, res) {
  burger.insertOne(['burger_name'], [req.body.burger_name], function (result) {
    // Send back the ID of the new quote
    res.redirect('/')
  });
});
// updating
router.put("/api/burger/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  burger.updateOne(
    {
      devoured: true
    },
    condition, function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });

});

// Export routes for server.js to use.
module.exports = router;