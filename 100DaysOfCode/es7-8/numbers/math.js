// returns  3.141592653589793
Math.PI
// returns 5 
Math.round(4.7);
// returns 4
Math.round(4.4);
// returns 64
Math.pow(8,2);      
// returns 8
Math.sqrt(64);
// returns 4.7
Math.abs(-4.7);
// returns 5 
Math.ceil(4.4);
// math.random returns a random number
Math.random();
// math.random used with math.floor returns a random integers
// returns a number between0 and 9
Math.floor(Math.random() * 10);

// returns a number between0 and 99
Math.floor(Math.random() * 100);

// lets creat a function that returns a random number between min and max value
// save this code in a file Math.js
function getRndmInt(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}console.log(getRndmInt(0,100));
// run node Math.js
// returns from 0 to 99 each time you run this code
