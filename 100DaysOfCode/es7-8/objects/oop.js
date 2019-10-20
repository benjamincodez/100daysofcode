                 //encapsulation in object oriented programming
// procedural code

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

// symptoms of procedural codes are functions with so many parameters
function getWage(baseSalary, overtime, rate) {
	return baseSalary + (overtime + rate)
}

// object oriented code

let employee = {
	baseSalary: 30000,
	overtime: 10,
	rate: 20,
	getWage: function () {
		return this.baseSalary + (this.overtime + this.rate);
	}
}
console.log(employee.getWage());



// const iceCreamTotal = {
// 	vernika: 600,
// 	andrew: 711,
// 	jessica: 818,
// 	david: 9001,
// 	richard: 1000000000
// };


				//Abstraction in object oriented programming
				// simpler interface
				//reduce impact of change






				// inheritance





				// ploy morphism
				// means many form 
