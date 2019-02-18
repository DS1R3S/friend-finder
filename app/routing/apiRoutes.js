// var path = require('path');
var friendsData = require('../data/friends');

// ROUTING
module.exports = function (app) {
    app.get('/api/friends', function (request, response) {
        response.json(friendsData);
    });

    app.post('/api/friends', function (request, response) {
        // console.log(request.body);
        var newUser = request.body;
        // console.log('userInput = ' + JSON.stringify(newUser));
        var userResponses = newUser.scores;
        // console.log('userResponses = ' + userResponses);

        var nameMatch = '';
        var imgMatch = '';
        var totalDiff = 100;


        for (var i = 0; i < friendsData.length; i++) {
            var difference = 0;
            // console.log('friend = ' + JSON.stringify(friendsData[i]));

            for (var j = 0; j < userResponses.length; j++) {
                difference += Math.abs(friendsData[i].scores[j] - userResponses[j]);
            }
            // console.log('diff = ' + difference);

            if (difference < totalDiff) {
                // console.log('Closest match = ' + difference);
                // console.log('Friend name = ' + friendsData[i].name);
                // console.log('Image = ' + friendsData[i].photo);
                totalDiff = difference;
                nameMatch = friendsData[i].name;
                imgMatch = friendsData[i].photo;
            }
            // console.log(score);
        }
        // Add new user to friendsData array
        friendsData.push(newUser);
        response.json({
            status: 'OK',
            nameMatch: nameMatch,
            imgMatch: imgMatch
        });
        console.log(friendsData);
    });
};