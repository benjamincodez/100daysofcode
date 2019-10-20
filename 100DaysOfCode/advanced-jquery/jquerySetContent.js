// using the .val() .text() .html() method to set content of an element

$("#btn1").click(function () {
	$("#test1").text("Hello world!");
});
$("#btn2").click(function () {
	$("#test2").html("<b>Hello world!</b>");
});
$("#btn3").click(function () {
	$("#test3").val("Dolly Duck");
});

// All of the three jQuery methods above: text(), html(), and val(), also come with a callback function.

$("#btn1").click(function () {
	$("#test1").text(function (i, origText) {
		return "Old text: " + origText + " New text: Hello world!(index: " + i + ")";
	});
});

$("#btn2").click(function () {
	$("#test2").html(function (i, origText) {
		return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")";
	});
});


// using the set Attr() method
$("button").click(function () {
	$("#w3s").attr("href", "http://www.w3schools.com/jquery");
});


// multiple value

$("button").click(function () {
	$("#w3s").attr({
		"href": "http://www.w3schools.com/jquery",
		"title": "W3Schools jQuery Tutorial"
	});
});


// adding a callback function
$("button").click(function(){
    $("#w3s").attr("href", function(i, origValue){
        return origValue + "/jquery";
    });
});
