$(function() {
	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var name = $("[name=burger-name]")
			.val()
			.trim();

		if (name !== "") {
			var newBurger = {
				name: name
			};

			$.ajax("api/burgers", {
				type: "POST",
				data: newBurger
			}).then(function() {
				location.reload();
			});
		} else {
			$("[name=burger-name]").val("");
		}
	});

	$(".devour-burger").on("click", function(event) {
		var id = $(this).data("id");

		var newState = {
			devoured: true
		};

		// Send the PUT request.
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: newState
		}).then(function() {
			// console.log("changed devour to", true);
			// Reload the page to get the updated list
			location.reload();
		});
	});

	// $("#delete-all").on("click", function(event) {
	// 	event.preventDefault();

	// 	$.ajax("/api/burgers/", {
	// 		type: "DELETE"
	// 	}).then(function(data) {
	// 		// Reload the page to get the updated list
	// 		location.reload();
	// 	});
	// });
});
