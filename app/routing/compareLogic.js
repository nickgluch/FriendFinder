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
        // var numbOne = parseInt(req.params.numbOne);

        // for (var i = 0; i < friendsData.length; i++) {
        //     return res.json(friendsData[i].name, friendsData[i].photo, friendsData[i].scores);
        // }

    });



    // API POST Requests
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        var reqName = (req.body.name);
        var reqPhotos = (req.body.photo);
        var reqScores = (req.body.scores);

        friendsData.push({ name: reqName, photo: reqPhotos, scores: reqScores });

        // var scoresData = friendsData[0].scores;
        // console.log(scoresData)

        //Difference Logic starts here
        //How to compare  all objects to see which 2 have the smallest difference between them
        console.log(friendsData);
        // for (var j = 0; j < friendsData.length;) {
        // for (var i = 0; i < friendsData[j].scores.length;) {
        var answerDiffList = [];

        for (var i = 0; i < 9; i++) {
            var j = 0;
            var k = 1;
            // var answerDiffList = [{ 'diffScores': [] }];

            var answerDiff = (friendsData[j].scores[i] - friendsData[k].scores[i]);
            answerDiffList.push(answerDiff);

            console.log('i: ' + [i]);
            console.log('j: ' + [j]);
            console.log('answerdiff: ' + answerDiff);
            console.log('answerdifflist: ' + answerDiffList);
            //incements the scores position 
            if (i > 8) {
                i++;
            }
            else if (i < 8) {
                j++;
                k++;
            }
        };
        res.json(true);
    });
};
