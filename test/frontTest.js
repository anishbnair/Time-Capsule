var Nightmare = require("nightmare");
var $ = require("jquery");

var nightmare = new Nightmare({ show: true,typeInterval: 2000 });

nightmare
  .goto("https://time-capsule1.herokuapp.com/")
  //.type("#search_form_input_homepage", "github nightmare")

  nightmare.evaluate(function(selector, value) {
    $(selector).val(value);
 }, 'inLineFormCustomSelect', '1977')
 //.evaluate("yearForm")

  .click("submit")
  .wait("#links a")
  .evaluate(function() {
    return document.querySelector("#links a").href;
  })
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });
