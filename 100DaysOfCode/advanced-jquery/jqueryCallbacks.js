$('document').ready(function () {
	$('button').click(function () {
		$('#p1').hide('slow', function () {
			alert('paragraph is hidden')
		});
	});
});
