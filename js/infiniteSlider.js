$(document).ready(function(){
	var speed = 5000,
		run = setInterval("rotate()", speed),
		item_width = $("#slides li").outerWidth(),
		left_value = item_width * (-1),
		left_indent = (parseInt($("#slides ul").css("left")) + item_width),
		distanceFromStart = 0,
		listItems = $("#slides ul").children();
		length = listItems.length;
		counter = 0;

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
			console.log("distance from start: " + distanceFromStart);
			console.log("counter: " + counter);
			console.log("list: " + length);
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
			placeInList = parseInt(number) + 1;
		placeInList = parseInt(number) + 1;
		distanceFromStart = left_indent * placeInList;
		console.log(distanceFromStart);
		console.log(placeInList);
		console.log(left_indent);
		$("#next").click(left_indent);
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

