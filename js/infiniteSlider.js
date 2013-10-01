$(document).ready(function(){
	var speed = 5000,
		run = setInterval("rotate()", speed),
		item_width = $("#slides li").outerWidth(),
		left_value = item_width * (-1),
		left_indent = (parseInt($("#slides ul").css("left")) + item_width),
		distanceFromStart = 0,
		listItems = $("#slides ul").children();
		length = listItems.length;
		counter = 1;

	$("slides li:first").before($("#slides li:last"));
	$("#slides ul").css({"left": left_value});

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

	$("#slides").hover(
		function() {
			clearInterval(run);
		},
		function() {
			run = setInterval("rotate()", speed);
		}
	);

	$(".pagination-list-item a").click(function(event){
		var number = $(this).text(),
			placeInList = parseInt(number),
			left_indent = parseInt($("#slides ul").css("left")) - item_width;
			

		placeInList = parseInt(number) + 1;
		distanceFromStart = left_indent * placeInList;
		console.log(distanceFromStart);
		console.log(placeInList);
		console.log(left_indent);
		if(counter < placeInList) {
			var distanceToTravel = (placeInList-counter);
			var distancefromSlide = distanceToTravel*left_indent;
			var new_left_value = left_value * distanceToTravel;
			
			console.log("counter: " + counter);
			console.log("place in list: " + placeInList);
			console.log("distance to travel: " + distanceToTravel);
			console.log("distance from Slide: " + distancefromSlide);
			$("#slides ul").animate({"left": distancefromSlide}, 600, function(){
			$("#slides li:last").after($("#slides li:first"));
			$("#slides ul").css({"left": new_left_value});
			console.log("left value: " + left_value);
			console.log("new left value: " + new_left_value)
			counter = placeInList;
		
		});
		}	
		else {console.log("here");
			  console.log("counter: " + counter);
			  console.log("left value: " + left_value);}


		// if counter < place in list -- animate - item width. to (place-counter in width * 250.) then reset counter to what place equals.
		// if counter > place in list -- animate + item width. to (counter-place in width * 250.) then reset counter to what place equals.

	});

});

function paginate () {
	listItems = $("#slides ul").children();
	length = listItems.length;
	console.log("length: " + length);
	$("#pagination").css("width", "(" + listItems + ")");
	for (var i = 0; i < listItems.length; i++) {
		var oneWidth = listItems.size(),
			totalWidth = oneWidth * 26;
		$("#pagination").append("<li><a>" + i + "</a></li>");
		console.log(i);
	}
	$("#pagination li").addClass("pagination-list-item")
	$("#pagination").css("width", totalWidth);
}
paginate();

function rotate() {
	var left_indent = parseInt($("#slides ul").css("left")) + item_width,
		item_width = $("#slides li").outerWidth();
	// $("#next").click();
}

