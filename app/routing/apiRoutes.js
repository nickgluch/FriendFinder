
var friendsData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {

        var reqName = (req.body.name);
        var reqPhotos = (req.body.photo);
        var reqScores = (req.body.scores);

        friendsData.push({ name: reqName, photo: reqPhotos, scores: reqScores });

        var sumList = [];

        for (j = 0; j < friendsData.length - 1; j++) {
            var answerDiffList = [];

            for (var i = 0; i < reqScores.length; i++) {
                var answerDiffEntry = [];

                var answerDiff = (Math.abs(friendsData[j].scores[i] - reqScores[i]));
                answerDiffEntry.push(answerDiff);
                answerDiffList.push(answerDiffEntry);
            };


            function sum(answerDiffList) {
                var sum = 0;
                for (var el in answerDiffList) {
                    if (answerDiffList.hasOwnProperty(el)) {
                        sum += parseFloat(answerDiffList[el]);
                    }
                }
                return sum;
            }

            var summed = sum(answerDiffList);
            sumList.push({ id: [j], userDifference: summed });

        };

        var getMinDiff = sumList.reduce(function (prev, curr) {
            return prev.userDifference < curr.userDifference ? prev : curr;
        });

        matchUser = friendsData[getMinDiff.id];
        res.json(matchUser);
    });


};


