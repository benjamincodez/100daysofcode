// running a function and returning each do element

// just like a forloop


function numberAdder() {
	let text, number;
	text = $(this).text();
	number = text.length;
	$(this).text(text + " " + number);
}
$('p').each(numberAdder);


