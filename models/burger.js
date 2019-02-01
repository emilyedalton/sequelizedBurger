// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  //all is function. it takes a callback from our ORM 
  all: function (cb) {
    orm.selectAll("burgers", function (res) {
      //the ORM gives this function the data contained in res    
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  //insert should always map to create
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;