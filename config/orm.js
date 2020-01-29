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
	// selects all items in database
	selectAll: function(table, cb) {
		// define queryString variable as one that selects all rows from table
		var queryString = "SELECT * FROM " + table;

		// connect to database
		connection.query(queryString, function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},

	// inserts a single entry into database
	insertOne: function(table, cols, vals, cb) {
		// define queryString variable as one that builds a query to create a table row
		var queryString = "INSERT INTO " + table;

		// build query string

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		// connect to database

		connection.query(queryString, vals, function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},

	// updates a single entry in database
	updateOne: function(table, colVals, condition, cb) {
		// define queryString variable as one that builds a query to update a table row
		var queryString = "UPDATE " + table;

		// build query string
		queryString += " SET ";
		queryString += toSql(colVals);
		queryString += " WHERE ";
		queryString += condition;

		// connect to database
		connection.query(queryString, function(err, res) {
			if (err) {
				throw err;
			}

			cb(res);
		});
	},

	// deletes entry
	delete: function(table, condition, cb) {
		// define queryString variable as one that builds a query to delete a table row
		var queryString = "DELETE FROM " + table;

		// build query string
		queryString += " WHERE ";
		queryString += condition;

		// connect to database
		connection.query(queryString, function(err, res) {
			if (err) {
				throw err;
			}

			cb(res);
		});
	}
};

module.exports = orm;
