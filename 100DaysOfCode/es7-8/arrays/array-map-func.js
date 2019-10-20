// A new method in arrays for rendering items;

const colors = ['green', 'blue', 'red'];

const item = colors.map(function(color) {
	return '<li>' + color + '</li>';
})
//  making it more neater
const item_s = colors.map((color) => '<li>' + color + '</li>');

// and neater

const items = colors.map((color) => `<li>${color}</li>`);
console.log('====================================')
console.log(items)
console.log('====================================')
