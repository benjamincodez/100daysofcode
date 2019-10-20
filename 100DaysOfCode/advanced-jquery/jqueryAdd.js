// using the append method()
$('p').append("some apppended text");


// using the prepend method

$('p').prepend("some prepended text")


// adding several new elements with append an prepend
function appendText() {
	var txt1 = "<p>Text.</p>";               // Create element with HTML
	var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
	var txt3 = document.createElement("p");  // Create with DOM
	txt3.innerHTML = "Text.";
	$("body").append(txt1, txt2, txt3);      // Append the new elements
}


// using the after and before method
// after
$("img").after("Some text after");
// befor
$("img").before("Some text before");


// adding several new element
function afterText() {
    var txt1 = "<b>I </b>";                    // Create element with HTML 
    var txt2 = $("<i></i>").text("love ");     // Create with jQuery
    var txt3 = document.createElement("b");    // Create with DOM
    txt3.innerHTML = "jQuery!";
    $("img").after(txt1, txt2, txt3);          // Insert new elements after <img>
}
