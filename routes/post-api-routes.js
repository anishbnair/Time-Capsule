// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // ***************************************************************************************************************
    // GET route for getting all of the posts
    app.get("/api/posts", function (req, res) {

        db.Decades.findAll({
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    // ***********************************************************************************************************


    // POST route for saving a new post
    app.post("/api/posts", function (req, res) {
        db.Decades.create(req.body).then(function (dbPost) {
            res.json(dbPost);
        });
    });

};
