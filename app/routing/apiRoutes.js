//require the data from the friend.js to insert it into the api route

var friendData = require("../data/friends");

//====================Routing========================

module.exports = function(app){
//the api get request will handle when a user vists a page and will display the json

app.get("/api/friends", function(req, res){
    res.json(friendData);
});



//=============================POSTING==========================

//the code below will post any new friends or survey takers to the friend data array

app.post("/api/friends", function(req, res){

    //this will hold what the user input for their choices
    var user = req.body


    //also do the calculations for the best friend in the back end router
    //first create variables to hold the friends name and their image link

    var bestName;
    var bestLink;
    //also create a variable to hold the difference calculated for each loop
    var diff = 0;
    //next create a large total difference value so it can be used later and so no matter what the first difference calculated will always be smaller than the initial total Difference
    var totalDif = 100;

    //first create a loop to sort through all of the friends in friend data
    for (var i = 0; i < friendData.length; i++){
        diff = 0;
        //next for each friend in the system we must sort through their choices array and compare it to the users inputs
        for (var k = 0; k < friendData[i].choices.length; k++){
            diff +=  Math.abs(user.choices[k] - friendData[i].choices[k]);
            console.log(diff);
        }
        if (diff < totalDif){
            //store the diff that is lower in total diff
            totalDif = diff;
            //store the variables of the friend with the lowest differneces to send to the html
            bestName = friendData[i].name;
            bestLink = friendData[i].link;
        }

    }
    console.log(bestLink, bestName);
    
    res.json({status: "ok", bestName: bestName, bestLink: bestLink});
    friendData.push(req.body)

});


}