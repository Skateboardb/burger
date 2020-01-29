var orm = require("../config/orm.js");

var burger = {
	// calls orm.selectAll function
	all: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},

	// calls orm.insertOne function
	insert: function(vals, cb) {
		orm.insertOne("burgers", ["burger_name"], vals, function(res) {
			cb(res);
		});
	},

	// calls orm.updateOne function
	update: function(colVals, condition, cb) {
		colVals.date = new Date()
			.toISOString()
			.slice(0, 19)
			.replace("T", " ");
		orm.updateOne("burgers", colVals, condition, function(res) {
			cb(res);
		});
	},

	delete: function(condition, cb) {
		orm.deleteOne("burgers", condition, function(res) {
			cb(res);
		});
	}
};

// export functions for controller
module.exports = burger;
