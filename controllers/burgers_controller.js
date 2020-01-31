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

router.post("/api/burgers", function(req, res) {
	burger.insert([req.body.name], function(result) {
		// Send back the ID of the new entry
		res.json({ id: result.insertId });
	});
});

router.put("/api/burgers/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);
	burger.update(req.body, condition, function(result) {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

// router.delete("/api/burgers/", function(req, res) {
// 	var condition = "id = " + req.params.id;

// 	console.log("condition", condition);
// 	burger.update(req.body, condition, function(result) {
// 		if (result.changedRows == 0) {
// 			return res.status(404).end();
// 		} else {
// 			res.status(200).end();
// 		}
// 	});

// });
module.exports = router;
