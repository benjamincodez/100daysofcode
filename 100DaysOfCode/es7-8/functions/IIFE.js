/**immediately invoked function expression (iife) */

(function () {
    console.log("my favourite number is 2");

})();


// named iife()


(favNumber = function (num = 3) {
    console.log("my favourite number is " + num);

})();
favNumber(50)


var a = 12;

(function () {
    var a = 3;
    console.log(a);

})();
console.log(a);

// writing an immediately invoked function with arrow function syntax

// what everybody sees

var benj = 'code geek ??';
console.log(ben);
(() => {
    // what ma mom sees
    var benj = '?? small boy ??';
        console.log(benj);
})();


// using es6 let keyword instead of an iife

let b = 'benj';
{
    let b = 'bash';
    console.log(b);
}
console.log(b);


