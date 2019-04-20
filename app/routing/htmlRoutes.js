//input path so we can load specific files in for the html
var path = require("path");


//export so the server is able to have access to the route files
module.exports = function(app) {


    //these next lines of code will handle a viewer visiting a page

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}