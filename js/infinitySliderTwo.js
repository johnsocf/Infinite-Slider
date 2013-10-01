$(document).ready(function(){
	var speed = 5000,
		item_width = $("#slides li").outerWidth(),
		left_value = item_width * (-1),
		left_indent = (parseInt($("#slides ul").css("left")) + item_width),
		distanceFromStart = 0,
		listItems = $("#slides ul").children(),
		length = listItems.length,
		countArray = [],
		placeInList,
		times= 0,
		number = 0;
		timesCounter = 0,
		counter = 1;

	$("slides li:first").before($("#slides li:last"));
	$("#slides ul").css({"left": left_value});
	$("#slides ul").css({"width": (250 * length)});
	
	function oneOver(timesCounter) {
		$("#slides ul").animate({"left": left_indent}, 200, function(){
			$("#slides li:last").after($("#slides li:first"));
			$("#slides ul").css({"left": left_value});
			
			console.log(timesCounter);
			counter++;
			
			if (counter < timesCounter) {
				setTimeout(function(){oneOver();}, 1000);
				times++;
				
				console.log("here");
			}

		});
		return false;
	}

	$(".pagination-list-item a").click(function(event){
		var number = $(this).text(),
			placeInList = parseInt(number);
			
		placeInList = parseInt(number) + 1;
		timesCounter = placeInList - counter;
			console.log("place in list (which slide is chosen): "+ placeInList);
			console.log("counter (which slide we are on): "+ counter);
			console.log("times (counter for function): "+ times);
			console.log("timesCounter (times to execute function): "+ timesCounter);

		if (counter < placeInList)
		{oneOver(timesCounter);}
			
	});

});

function paginate () {
	listItems = $("#slides ul").children();
	length = listItems.length;
	console.log("length: " + length);
	$("#pagination").css("width", "(" + listItems + ")");
	for (var i = 0; i < listItems.length; i++) {
		var oneWidth = listItems.size(),
			countArray = [],
			totalWidth = oneWidth * 26;
		$("#pagination").append("<li><a>" + i + "</a></li>");
		console.log(i);
	}
	$("#pagination li").addClass("pagination-list-item")
	$("#pagination").css("width", totalWidth);
}
paginate();


