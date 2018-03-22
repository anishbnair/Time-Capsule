
// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Get rotue for retrieving a single list of facts
  app.get("/api/history/:year", function(req, res) {
    db.histories.findOne({
      attributes: ['year', 'best_picture', 'song', 'us_pres', 'census', 'super_bowl', 'world_series'],
      where: {
        year: req.params.year
      }
    })
    .then(function(dbhistories) {
      res.json(dbhistories);
    });
  });
}
