// function add(num1,num2){
//   return numA * numB;
// }
// console.log(add(12,12));

// arrow function

// the old way of saying it

// function add(...num){
//      let total = nums.reduce(function (x,y){
//        return x + y;
//      })
//      console.log(total)
// }

// the new way with arrow function

// function add(...nums) {
//   let total = nums.reduce((x,y) => {
//   return x + y;
//   });
//      console.log(total);

// }
// add(4,5,7,8,12)

// buh we can actually make the code more simpler to read

function add(...nums){
  let total = nums.reduce((x,y) =>  x + y);
  console.log(total);

}add(1,2,3,4,5,6,7,8,9,0)

/* sayName function */

var sayName = function (name) {
console.log('====================================')
// console.log(name)
console.log('====================================')
}; sayName('benjamin');

/* sayHello function */

sayhello = (name) => {
  console.log('====================================')
  console.log(`hello ${name}`)
  console.log('====================================')
};sayhello('olson')


/* Add function */
Times = (...num) => {
  let nums = num.reduce((x, y) => (x * y));
  console.log('====================================');
  console.log(nums);
  console.log('====================================');
};
Times(4, 2);

/* iife function */
(function (x,y){
  return x + y
})();
console.log('====================================')
console.log(add(5, 5))
console.log('====================================')
