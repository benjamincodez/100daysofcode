// using the jquery dimensions
// OMG ben whta are they...how do they look
// innerHeight()
// innerWidth()
// Height()
// Width()
// outerHeight()
// outerWidth()



// The width() method sets or returns the width of an element(excludes padding, border and margin).

// The height() method sets or returns the height of an element(excludes padding, border and margin).

// The following example returns the width and height of a specified < div > element:

// ------------------------------------------------

// The innerWidth() method returns the width of an element(includes padding).

// The innerHeight() method returns the height of an element(includes padding).

// The following example returns the inner - width / height of a specified < div > element:
// ---------------------------------------------------


// jquery width() and height() methods


$("button").click(function () {
	var txt = "";
	txt += "Width: " + $("#div1").width() + "</br>";
	txt += "Height: " + $("#div1").height();
	$("#div1").html(txt);

});


// jQuery innerWidth() and innerHeight() Methods


$("button").click(function () {
	var txt = "";
	txt += "Inner width: " + $("#div1").innerWidth() + "</br>";
	txt += "Inner height: " + $("#div1").innerHeight();
	$("#div1").html(txt);
});


