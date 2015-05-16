$(document).ready(function() {
// ==============================
//  * Update completion progress text function
// ==============================
	function updateCompletion(obj) {
		var num = obj.completed;
		var max = obj.$list.length;
		var string = "";
		if (num === max) {
			string = "<strong>All!</strong>";
		}
		else {
			string = num.toString() + " of " + max.toString();
		}
		obj.$completion.html(string);
	};
// ==============================
//  * Objects for completion text
// ==============================
	var ingredients = {
		$completion: $(".ingredients-complete"),
		$list: $("#ingredients li").toArray(),
		completed: 0
	};
	// Initialize completion text
	updateCompletion(ingredients);
	var directions = {
		$completion: $(".directions-complete"),
		$list: $("#directions li").toArray(),
		completed: 0
	};
	// Initialize completion text
	updateCompletion(directions);
// ==============================
//  * JQuery click events
// ==============================
	$(".ingredients-li").click(function() {
		if ($(this).hasClass("li-selected")) {
			$(this).removeClass("li-selected");
			ingredients.completed -= 1;
		}
		else {
			$(this).addClass("li-selected");
			ingredients.completed += 1;
		}
		updateCompletion(ingredients);
	});
	$(".directions-li").click(function() {
		if ($(this).hasClass("li-selected")) {
			$(this).removeClass("li-selected");
			directions.completed -= 1;
		}
		else {
			$(this).addClass("li-selected");
			directions.completed += 1;
		}
		updateCompletion(directions);
	});
	// Variables for direction image manipulation
	var imagesRemoved = false;
	$directionImgs = $(".direction-img");
	$removeImageButton = $(".remove-image-button");
	// Direction image manipulation event
	$(".remove-image-button").click(function() {
		if (imagesRemoved) {
			$directionImgs.fadeIn("slow");
			$removeImageButton.html("Hide Directions Images");
			imagesRemoved = false;
		}
		else {
			$directionImgs.fadeOut("slow");
			$removeImageButton.html("Restore Directions Images");
			imagesRemoved = true;
		}
	});
});