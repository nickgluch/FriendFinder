// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });


    // API POST Requests
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {

        //change this to have compatability logic
        if (friendsData.length < 5) {
            friendsData.push(req.body);
            res.json(true);
        }
        // else {
        //     waitListData.push(req.body);
        //     res.json(false);
        // }
    });

    // ---------------------------------------------------------------------------

};
