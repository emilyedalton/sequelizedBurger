module.exports = function(sequelize, DataTypes) {
  const Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
  },

  });

  // Post.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Post.belongsTo(models.Author, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Burger;
};





// // Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// var burger = {
//   //all is function. it takes a callback from our ORM 
//   all: function (cb) {
//     orm.selectAll("burgers", function (res) {
//       //the ORM gives this function the data contained in res    
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   //insert should always map to create
//   insertOne: function (cols, vals, cb) {
//     orm.insertOne("burgers", cols, vals, function (res) {
//       cb(res);
//     });
//   },
//   updateOne: function (objColVals, condition, cb) {
//     orm.updateOne("burgers", objColVals, condition, function (res) {
//       cb(res);
//     });
//   }
// };

// // Export the database functions for the controller (catsController.js).
// module.exports = burger;