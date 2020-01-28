// Requires connection.js
var connection = require("../config/connection.js");
// --  Declares helper functions

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function toSql(obj) {
	var stringArray = [];

	for (var key in obj) {
		var value = obj[key];

		if (Object.hasOwnProperty.call(obj, key)) {
			if (typeof value === "string" && value.indexOf(" ") >= 0) {
				value = "'" + value + "'";
			}

			stringArray.push(key + "=" + value);
		}
	}

	return stringArray.toString();
}

var orm = {
	selectAll: function() {
		// selects all items in database
		// define queryString variable as one that selects all rows from table
		// connect to database
	},

	insertOne: function() {
		// inserts a single entry into database
		// define queryString variable as one that builds a query to create a table row
		// build query string
		// connect to database
	},

	updateOne: function() {
		// updates a single entry in database
		// define queryString variable as one that builds a query to update a table row
		// build query string
		// connect to database
	},
	delete: function() {
		// deletes entry
		// define queryString variable as one that builds a query to delete a table row
		// build query string
		// connect to database
	}
};

module.exports = orm;
