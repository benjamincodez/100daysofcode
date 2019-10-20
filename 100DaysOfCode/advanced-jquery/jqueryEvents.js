// monitoring events with jquery

// whats make up an event listenner on jquery
// the target Element $('body');
//the on() method
// the type of event u want to listen for 'keypress'
// the callback function that will be run when the event fires

$('#input').on('keypress', function () {
	console.log('a key is pressed');//or
	$('body').css('background', 'blue');

});


// challenges

// listen to the #my-button element
// listen for a click event
// perform the following actions when the button is clicked
	  //remove the #my-button from the dom
	//   add the class success to the body

$('#my-button').on('click', function () {
	$(this).remove();
	button.remove();
	$('body').addClass('success');

})


// using the jquery convinient method

$('input').keypress(function () { })
$('input').mouseover(function () { })
$('input').change(function () { })
$('input').click(function () { })
$('input').keyup(function () { })
$('input').hover(function () { }) //is not the same the .on()
