// working with callbacks

function calc(num, callback) {
	return callback(num);
}

let addTen = function (num) {
	return num + 10;
};

console.log('====================================')
console.log(calc(3, addTen))
console.log('====================================')
