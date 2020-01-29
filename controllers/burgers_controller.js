var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

// Create all routes and set logic within to perform specific tasks

// brings up index handlebars object on default page
router.get("/", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		res.render("index", hbsObject);
	});
});

module.exports = router;
