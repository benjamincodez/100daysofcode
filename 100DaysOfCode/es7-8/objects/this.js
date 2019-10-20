
//this == window;//true

/*the this keyword */

let myObj = {
	name: 'benjamin',
	sayhello: function(){
		return `hello ${this.name}`;
	}
}; console.log('====================================');
console.log(myObj.sayhello());
console.log('====================================');


/*an object factory with the this key  */

let person = function (name, age, skills) {
	this.name = name;
	this.age = age;
	this.skills = skills;

};

let benjamin = new person('benjamin', 16, 'developer');
console.log('====================================');
console.log(benjamin);
console.log('====================================');
