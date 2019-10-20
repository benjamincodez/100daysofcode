
let myObj = {
	num: 2,
}

let myFunc = function (num1, num2) {
	return this.num + num1 + num2;
};

console.log('====================================');
console.log(myFunc.apply(myObj,[2,5]));
console.log('====================================');
