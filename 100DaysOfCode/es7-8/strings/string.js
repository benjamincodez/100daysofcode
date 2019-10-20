// possible method to use for accessing strings
let str = "hellow word"
CharAt(0)  //returns h


// using the repalce method
let str = 'please visit microsoft';
let newstr = str.replace("microsoft","google");

// u can also use regular expression on it

let str = 'please visit microsoft';
// using the global operator
let newstr = str.replace(/microsoft/g,"google");


let fname ="olson";
let lname ='coder'
// string interpolation
const fullname = `${fname} ${lname}`;
// console.log(` ${fullname}`)

// a method is a function 
// a function is a set of insruction
trim()
toUpperCase()
// splits up strings into pieces
split(' ') 
toLowerCase()


// template literals
let num1 = 2;
let num2 = 3;
//  const fullname = `${num1 + num2}`;
//  console.log(fullname);
 
// old way of saying hello world on multi line
let example = 'hello \n' + 'world';
document.getElementById('#demo').innerText=example;


// template literals new way

let example = `${fname}

${lname}
`;
// and we re gonna get  
// olson
// coder
//  we can also keepit on one line 
let example = `${fname} ${lname}`;