/**Arrow Functions */
// for writng cleaner and shorter func

// syntax
(param1, param2) => { statements }
(param1, param2) => expression;
(param1, param2) => { return expression }

(singleParam) => { statements}
singleParam => { statemetns };
() => { statements };
() => expression;
() => { return expression }

(param1, param2, paramN) => expression

// normal function

let multiply = function (x, y) {
    return x * y;
};

// arrow function

let mult = (x, y) => { return x * y };

// or

let multiple = (x, y) => x * y;


let languages = [
    'english',//yea
    'maths',//🏃🏃‍♀️
    'physics',//🤯🤯
    'chemistry',//😍😍
    [
        'javascript',//i love ya MAN
        'python',//my ex
        'coffe-script', //huh
        'ruby on rails',//fyn lady
        'c-sharp',//no go area
        'c-plus-plus'//lord have mercy
    ]
]

// checking the length of an array with arrow function and map method
let firstLength = languages.map(function (language) {
    return language.length;
});
let secondLength = languages.map((language) => {
    return language.length;
});
let thirdLength = languages.map(language => language.length)

// console.log('====================================')
// console.log(`${firstLength}
// ${secondLength}
// ${thirdLength}`)
// console.log('====================================')

// no binding of 'this'

// function person(){
//     this.age = 0;

//     setInterval(() => {
//         this.age++;
//     }, 1000);

// };
// let p = new person();
//  returning  objects literals
let func = () => ({ foo: 1 });

// line breaks

let lineFunc = () => 1;



// the square func

// es5

const sqRoot = function (number) {
    return number * number;
};

// es6
// arrow function
const sQRoot = number => number * number;
// sqRoot();
// console.log('====================================')
// console.log(sqRoot(5))
// console.log('====================================')


// where arrow functions starts making sense

const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
]

// const notActiveJobs = jobs.filter(function (job) { return jobs.isActive !== true });

const activeJobs = jobs.filter(function (job) { jobs.isActive})
// arrow
const notActive = jobs.filter(job => jobs.isActive)

// console.log(notActiveJobs)
// console.log('====================================')

// console.log(activeJobs)
// console.log('====================================')

// arrow functions and this keyword


const person = {
    talk() {
        // the old way
        let self = this;
        // setTimeout(function () {
        setTimeout(() => {
            //arrow functions dont rebind the this keyword
            console.log("self",self);
        },1000)
    }
}
person.talk();

