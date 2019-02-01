//MVC stands for "model", "view", "controller" a pattern for organizing your code 
// M stands for model. Represents your live model of your data 
// View displaying the data 
// Controllers Handle input for your database

//requiring express
var express = require("express");
//
//
var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory
// This will be your CSS and Javascript
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
// this is your view engine 
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// we've moved all of our routs into what we're calling Controllers
//prior to this we would routes were contained in the server file
var routes = require("./controllers/burgers_controllers");
// now we're 
app.use(routes);

app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
})