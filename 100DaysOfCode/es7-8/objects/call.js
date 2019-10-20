let myObj = {
	name: "benjamin",

}

let sayHello = function() {
	return `hello ${this.name}`
}

console.log('====================================')
console.log(sayHello.call(myObj))
console.log('====================================')


let myNum = {
	num: 2,
}

let myFunc = function (num1,num2) {
	return this.num + num1 + num2;
}

console.log('====================================');
console.log(myFunc.call(myNum,2,3));
console.log('====================================');
