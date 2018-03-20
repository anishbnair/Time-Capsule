
// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Get rotue for retrieving a single list of facts
  app.get("/api/history/:year", function(req, res) {
    db.Histories.findOne({
      where: {
        year: req.params.year
      }
    })
    .then(function(dbHistories) {
      res.json(dbHistories);
    });
  });
}
