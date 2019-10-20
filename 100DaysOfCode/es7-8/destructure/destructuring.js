// destructuring is a quicker way of assigning values to variables

/**destructuring */
// assigning variables from objects

var siblingsAges = { A: 30, B: 27, C: 26, D: 24, E: 'me!' }

// threading through the old paths
// var a = siblingsAges.A;//a = 30
// var b = siblingsAges.B;//b = 27
// var c = siblingsAges.C;//c = 26
// var d = siblingsAges.D;//d = 24
// var e = siblingsAges.E;//e = me!🙄

// rolling down the new coolest way

const { A, B, C, D, E } = siblingsAges;
// console.log('====================================')
// console.log(D,E)
// console.log('====================================')
// and you can also do or to any letter
const { A: a, B: b, C: c, D: d, E: e } = siblingsAges;
// console.log(b);

// assign varaibles from nested object

const nested = {
    start: { x: 5, y: 6 },
    end: { x: 6, y: -9 }
};
const { start: { x: startX, y: startY } } = nested;
// console.log(startX);

// Assign variables from arrays
const [q, r] = [1, 2, 3, 4, 5, 6];
// u can add commas to reach desired index

// const [q,,,,r] = [1, 2, 3, 4, 5, 6];


console.log('====================================')
console.log(q, r);
console.log('====================================')



// rest operator to re-assign array elements

// const [q, r,...rest] = [1, 2, 3, 4, 5, 6];
// console.log(q, r);
// console.log(rest);

// you use the rest operator to get the rest of the arrays

// passing objects as a function parameter

const profileUpdate = (profileUpdate) => {
    const { name, age, natonality, loaction } = profileUpdate;
}
