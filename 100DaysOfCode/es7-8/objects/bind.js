// the bind method is used for creating a new func or object and giving it a constant value----just like the name bind

let myObj = {
	num1: 5,
	num2: 4,
}

let myFunc = function () {
	return this.num1 + this.num2;
}

let added = myFunc.bind(myObj);

console.log(added());

// lets creat another object

let myObj2 = {
	num1: 3,
	num2: 10
}
let another = myFunc.bind(myObj2);
console.log(another());

// the person object

const person = {
	name: "benjamin",
	walk() {
		console.log(this);

	}
};
person.walk();


const walk = person.walk.bind(person)
walk()
