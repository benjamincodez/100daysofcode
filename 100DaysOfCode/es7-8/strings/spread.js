// spread operator
// let num = [1,2,3,4,5,6];

// let numa = [...num];
// num.push(true)
// console.log(num)


// using spread operators in objects

// let num1 = {
//     firstname: 'benjamin'

// }
// let num2 = {
//     firstname: 'N/A',
//     ...num1
// }
//   num2 = {firstname: 'olson'}
//  console.log(num2);

//  use of the spread opeartor
/**spread operator /  Rest operator */
// adding elements of an existing array into a new array

var skillsToAdd = ['Nodejs','mongodb','express','react','es7']

var hadSkills = ['responsive web design', ...skillsToAdd,
'jquery','html','css','javscript','es6','linux'];


console.log('====================================')
console.log(hadSkills)
console.log('====================================')

// passing elements of an array as arguments to a function
function addThreeNumber(x,y,z) {
    console.log('====================================')
    console.log(x+y+z)
    console.log('====================================')
}
  var args = [0,1,2];
  // var args = [0,1,2,4];
  // note that if theres a third fourth item in
  // the array its gonna ignore it becos the function has only three args
  addThreeNumber(...args)

// copy arrays
var arr = [1,2,3,];
var myarr = [...arr]; //like arr.slice()
myarr.push(4);
console.log('====================================');
console.log(arr);
console.log('====================================');
console.log('====================================');
console.log(myarr);
console.log('====================================');


// concatenating arrays
var arr = [1,2,3,];
var myarr = [4,5,6,7];
arr.concat(myarr);
arr1 = [...arr,"benjamincode",...myarr]

console.log('====================================');
console.log(arr1);
console.log('====================================');


// Rest: condense multiple element into an array
