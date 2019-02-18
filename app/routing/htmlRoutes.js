
const path = require('path');
// var express = require('express');

// ROUTING
module.exports = function (app) {
    // route to survey page
    app.get('/survey', function (request, result) {
        result.sendFile(path.join(__dirname, '../public/survey.html'));
    });
    // Catch all route to default to home
    // app.get('*', function (request, result) {
    //     result.sendFile(path.join(__dirname, '../public/home.html'));
    // });
};


 