// protostypes


// let person = function () {
// 	this.name = name;
// 	this.age = age;
// 	this.skills = skills;
// }


//constructor
let person = function () { };

// using prototypes
person.prototype.name = "godwin";
person.prototype.age = 16;

// creating a person
let olson = new person();
olson.name = "gerald"

console.log('====================================');
console.log(olson.name);
console.log('====================================');

// creating a prototype function

// person.prototype.hello = function(){
// 	return `hello ${this.name}`;
// }

// console.log('====================================')
// console.log(person.hello())
// console.log('====================================')
