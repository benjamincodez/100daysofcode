// rest operators for converting unknown values to arrays
function add(...nums){
    console.log(nums)
}
add(4,5,6,7,8);

// and for condensing multiple elements into an array

function multiply(multiplier,...theArgs) {
    return theArgs.map(function(element){
        return multiplier * element;
    });
}var arr = multiply(2,1,2,3)
console.log('====================================');
console.log(arr);
console.log('====================================');