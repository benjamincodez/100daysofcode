// css with jquery


let articleItems;

articleItems = $('.article-items');
articleItems.css('font-size', '20px');

// using the addClass() method

$("button").click(function () {
	$("h1, h2, p").addClass("blue");
	$("div").addClass("important");
});

// adding mulitpl classes with jqueryCss method
$("button").click(function () {
	$("#div1").addClass("important blue");
});


// using the jquery removeClass()  method
// removing the blue class from all these tags
$("button").click(function () {
	$("h1, h2, p").removeClass("blue");
});

// using the jquery toggleClass() method
// now if these tags doesnt already have this class  blue the toggle method
// adds it to them buh if they do already it removes it fro them
$("button").click(function () {
	$("h1, h2, p").toggleClass("blue");
});


// using the jquery css() method

$("p").css("background-color", "yellow");


// using it to set multiple properties

$("p").css({ "background-color": "yellow", "font-size": "200%" }); 
