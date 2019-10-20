let companies = [
	{
		name: "company one",
		category: "retail",
		start: 1951,
		end: 2003,
	},
	{
		name: "company two",
		category: "finance",
		start: 1986,
		end: 2008,
	},
	{
		name: "company three",
		category: "auto",
		start: 1991,
		end: 2007,
	},
	{
		name: "company four",
		category: "technology",
		start: 1980,
		end: 2010,
	},
	{
		name: "company five",
		category: "finance",
		start: 1971,
		end: 2014,
	},
	{
		name: "company six",
		category: "retail",
		start: 1988,
		end:1996,
	},
	{
		name: "company seven",
		category: "auto",
		start: 1981,
		end: 1989,
	},
	{
		name: "company seven",
		category: "auto",
		start: 2011,
		end: 2016,
	}
]

// for (let i = 0; i < companies.length; i++) {
// 	console.log(companies[i]);

// }


//forEach

// companies.forEach(function (company) {
// 	console.log(company);
// })

// arrow
// let company = companies.forEach(company => console.log(company));

// es6
// companies.forEach((company, index, companies) => {
// 	console.log(company);
// 	console.log(index);
// 	// console.log(companies);
// })



// filter

// Get 21 and older


const ages = [1,12, 31,4, 23, 21,2, 44, 54,15,5, 66, 17,7, 88, 99, 76, 54, 32, 89]

// let canDrink = [];


// es5
// for (let i = 0; i < ages.length; i++) {
// 	if (ages[i] >= 20) {
// 		canDrink.push(ages[i]);
// 	}
// }
// console.log(canDrink);


//using  es6


// const canDrink = ages.filter((age) => {
// 	if (age >= 21) {
// 		return true;
// 	}
// })

//making it look smarter
// const canDrink = ages.filter(age => age >= 21);

// logging it out to the console
// console.log(canDrink);


// filter retail companies
// using es5
// const retailCompanies = companies.filter(function (company) {
// 	if (company.category === 'retail') {
// 		return true;
// 	}
// })

//

// using es6
// const retailCompanies = companies.filter(company => company.category === 'retail');

//  get 80's companies
// const eightiesCampanies = companies.filter(company => company.start >= 1980 && company.start <= 1990)

// get companies that lasted ten years or more

// const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

// map
// create array of companies names
// const companyNames = companies.map(company => {
// 	return company.name
// })

// make it look neat
// const companyNames = companies.map(company => company.name);

// comapnies start and end date
// const testMap = companies.map(company => {
// 	return `${company.name}  (${company.start} - ${company.end})`
// })

// making it look short and neat

// const testMap = companies.map(company =>
	// `${company.name}  (${company.start} - ${company.end})`);

// getting the sqrt of all the ages

// const agesSquare = ages.map(age => Math.sqrt(age));

// ages times two

// const agesTimesTwo = ages.map(age => age * 2);

// getting the sqrt and multipling by two

// const ageMap = ages
// 	.map(age => Math.sqrt(age))
// 	.map(age => age * 2);

// sort
// sort companies by sart years

// const sortCompanies = companies.sort((c1,c2) => {
// 	if (c1.start > c2.start) {
// 		return 1;
// 	} else {
// 		return -1;
// 		}
// 	})

// shoter and nicer way
// const sortCompanies = companies.sort((a, b) => a.start > b.start ? 1 : -1);


// sorting ages

// const sortedAges = ages.sort((a, b) => a - b);
// wanna have it in a decending other
// const sortedAges = ages.sort((a, b) => b - a);

// reduce

// let ageSum = 0;

// // doing it the forloops way

// for (let i = 0; i < ages.length; i++) {
// 	ageSum += ages[i];
// }

// doing it the reduce way

// const ageSum = ages.reduce((total, age) => total + age);

// getting total years for all companies

// const totalAges = companies.reduce((total, company) => total + (company.start - company.end), 0)

//combine methods
const combined = ages
	.map(age => age * 2)
	.filter(age => age >= 40)
	.sort((a, b) => a - b)
	.reduce((a, b) => a + b, 0);

//logging it out
	console.log(combined);
