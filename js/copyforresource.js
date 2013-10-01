
	$("#next").click(function(left_indent){
		var left_indent = parseInt($("#slides ul").css("left")) - item_width;
		$("#slides ul").animate({"left": left_indent}, 200, function(){
		$("#slides li:last").after($("#slides li:first"));
		$("#slides ul").css({"left": left_value});
		distanceFromStart = 250 + distanceFromStart;
		if (counter <= (length-2)) {
			counter ++;
		}
		else {counter = 0;}
		// console.log("distance from start: " + distanceFromStart);
		// console.log("counter: " + counter);
		// console.log("list: " + length);
		});
		return false;
	});

	$("#prev").click(function(){
		var left_indent = parseInt($("#slides ul").css("left")) + item_width;

		$("#slides ul").animate({"left": left_indent}, 200, function(){
		$("#slides li:first").before($("#slides li:last"));
		$("#slides ul").css({"left": left_value});
		distanceFromStart = distanceFromStart - 250;
		console.log("distance from start: " + distanceFromStart);
		if (counter >= -Math.abs(length-2)) {
			counter --;
		}
		else {counter = 0;}
		console.log("counter: " + counter);
		console.log("list: " + length);
		});
		return false;
	});	