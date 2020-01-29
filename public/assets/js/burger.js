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
});
