var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var models= require("../models");


router.get("/", function(req, res) {
 models.Burger.findAll({}).then(function(data) {
   var hbsObject = {
     //burgers is a property in the array of objects...the data are arrays of objects from the DB
     burgers: data
   };
   console.log(hbsObject);
   res.render("index", hbsObject);
 });
});

// // Create all our routes and set up logic within those routes where required.
//inserting
router.post("/api/burger/new", function (req, res) {
  const newBurger = req.body;
  console.log(req.body);
  //define the properites you want it to create in your database
  models.Burger.create({
    burger_name: newBurger.burger_name,
  devoured: newBurger.devoured
  }).then(function(results) {
    //always use .then it will wait until any promise is done
    //whenever you're working with promieses .then is a safety net to ensure you get your data at the right time
    res.json(results);
   }).catch(err =>{
    res.status(500).end(err);
  });
    // res.redirect('/')
  });
// // // updating
router.put("/api/burger/:id", function (req, res) {
  
    const devour = req.params;

    const updatedModel = {
      devoured: true,

      }
    
      const query = {
        where:{
        id:devour.id,

        }
      }
    
      models.Burger.update(updatedModel, query).then(results=>{
      

      res.json(results)
    });
  });
    




// Export routes for server.js to use.
module.exports = router;