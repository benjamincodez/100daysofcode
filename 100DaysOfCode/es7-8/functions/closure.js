// closures makes handling functions easier for js
let add = function (num1) {
	return function (num2) {
		return num1 + num2;
	}
}

// creating functons in a fly

addTwo = add(2);

console.log(addTwo(34));

addTen = add(10);
console.log(addTen(5));


