//Dependencies
//=====================================
var express = require("express");
var path = require("path");

//set up the express app
//===================================
var app = express();
var PORT = process.env.PORT || 8080;

//set up the express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());



//The following code will point the server to a series of router files

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//create a listener code to "start" the server when called

app.listen(PORT, function(){
    console.log("The App Is listening on PORT: " + PORT)
})