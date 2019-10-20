// selecting an element and calling the .html on it will make it return both html tags and texts

let mySection;
mySection = $('#section');
//returns everything withing the section tag
mySection.html();


// using the .text returns only the text within the section element

let mySection;
mySection = $('#section');
//returns only the text withing the section tag
mySection.text();


// changing the value of an html element with the .text method

$('#input').on('change', function () {
	let val,h1;
	val = $('#input').val();
	h1 = $('articles').children('h1');
	h1.text(val);
});
