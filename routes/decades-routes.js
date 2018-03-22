
// Dependencies
// =============================================================

// Requiring our model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // Get rotue for retrieving data
    app.get("/api/decades/:decade", function (req, res) {
        db.Decades.findAll({
            where: {
                decade: req.params.decade
            }
        })
            .then(function (dbDecades) {
                res.json(dbDecades);
            });
    });
}
