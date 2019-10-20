let myArr = ['hey','whoa','ben','ken','hu','me','ya']
// methods
// myArr.push('nigeria')
// myArr.shift()
// myArr.unshift()
// myArr.pop()
// myArr.splice()
// myArr.reverse()
// myArr.sort()
// myArr.reduceRight
// myArr.reduce
// myArr.filter
let nuts = [5,6,7,74,43]

 for(var i = 0; i <= 10; i++){
    //  iterating over our array
    myArr.forEach((element) => {
        // console.log(element);
        
         
    });
    // console.log(nuts);
 }

//  in arrays and objects u re passing with reference

//  array challenges
let maranatha = [17];
let marashouldbe = maranatha;
marashouldbe.push(18)
// outps [17,18]
// console.log(marashouldbe);


// how to  assign new arrays with the spread operator

let nxtY = [...marashouldbe]
maranatha.push(56)
// another way is using the map method
// let nxtY = marashouldbe.map((element) => {
//     return element;
// })
  nxtY.push(20)
console.log(nxtY,marashouldbe,maranatha);

