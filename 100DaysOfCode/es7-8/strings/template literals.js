// rightouscoder------benjamincodes
// template literals

// multi-line strings

console.log('====================================');
console.log(`string tet line 1
string text line 2`);
console.log('====================================');



// expression interpolation
var a = 5;
var b = 10;
console.log('====================================');
console.log(`fifteen is ${a + b} and 
not ${2 * a  + b}. `); //getting the same result as using \n
console.log('====================================');




// taged template literals
// using tagged template literals
function tag(strings,...values){
    console.log('====================================');
    console.log(strings);
    console.log('====================================');
    console.log('====================================');
    console.log(values);
    console.log('====================================');
    return " Rightous Coder"
}
console.log('====================================');
console.log(tag`Hello ${a + b} world ${a * b}`);
console.log('====================================');