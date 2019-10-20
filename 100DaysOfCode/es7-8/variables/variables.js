// let
// let variables are local variables
let i = 'benjamin';
for (let i = 0; i < 5; i++) {

   //  console.log(i);
}
//  console.log(i);
// const
const unchangeable = 'true';
//  console.log(unchangeable);

// var
// var variables are global variables
var everyWhere = 'ben';
for (let i = 0; i < 5; i++) {

   // console.log(i);
}
//  console.log(everyWhere);


// overview of let and const and var

// if (false){
//     var num = 4;
// }console.log(num)



/**
 * this is how javascript sees this code because of hoisting
 *  var num ;
 * if (false){
 *  var num = 4;
}console.log(num)

 * 
 */


//  while let is more stricter
// this what happens with let declearation

/*
*
* if (false){
    var num = 4;
    }console.log(num)
 * so this will return a reference error
 * cos let sees it how you decleared it
 * 
 */


//  const


// const num = [] ;
const pi =  3.14;
// returns 5
// buh what about cre-assigning the  value
// num = 10; returns an error
// buh u can actually change the datatype to an array or object or boolean
// num.push(66) returns [66]
// num.firstname = 'benjamin'; returns benjamin

console.log(pi);
