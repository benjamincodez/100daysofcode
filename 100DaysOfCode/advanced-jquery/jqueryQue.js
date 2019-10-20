// jquery uses que functionlity that means it handles stuff step by step

$(document).ready(function () {
	$("button").click(function () {
		var div = $("div");
		div.animate({ height: '300px', opacity: '0.4' }, "slow");
		div.animate({ width: '300px', opacity: '0.8' }, "slow");
		div.animate({ height: '100px', opacity: '0.4' }, "slow");
		div.animate({ width: '100px', opacity: '0.8' }, "slow");
	});
});

// dont forget that html Element has a default stylings and positions
// so u have to change the position of the div relative or fixed to be able to animate it
