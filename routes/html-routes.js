// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the decades page
    if (req.user) {
      res.redirect("/decades");
    }
    res.sendFile(path.join(__dirname, "../public/history.html"));
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/decades");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/post", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/post.html"));
  });

  app.get("/history", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/history.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the login page
  app.get("/decades", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/decades.html"));
  });

};
