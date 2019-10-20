// using jquery to get content of elements and set them again

$("#btn1").click(function () {
	alert("Text: " + $("#test").text());
	// returns only the text from an html and not the html it self
});
$("#btn2").click(function () {
	alert("HTML: " + $("#test").html());
	// returns only the html tags with both the text
})

// getting values with the .val() method
$(document).ready(function () {
	$("button").click(function () {
		alert("Value: " + $("#test").val());
		// returns only the value from an input and not the html or text
	});
});


// using the .attr method to get the attr of an element

	$(document).ready(function(){
		$("button").click(function () {
			alert($("#w3s").attr("href"));
		});
	});

