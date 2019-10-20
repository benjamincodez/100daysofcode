let example = {
    firstName: 'benjamin',
    lastName: 'olson',
    addres: {
        city: 'austin',
        state: 'Texas'
    },
    age: 16,
    cats: 'none',

};

example.age = 17;
// to get only the keys of the objects you can use console.log(object.keys(example))
// console.log(Object.keys(example));
// to get everything inside the objects you can use console.log(object.values(example))
// console.log(object.values(example))
// to check if a property or a key exist you can use console.log(example.hasOwnProperty('firstName'))
// console.log(example.hasOwnProperty('firstName'))



// objects challenges
exam1 = {
    firstName: 'olson',
};
// objects pass values by reference
// let exam1 = exam

// creating a totally new objects from an existing one
let exam2 = Object.assign({}, exam1)
exam2.lastName = 'benjamin';
// console.log(exam1)
// console.log(exam2)

// let n = 555;
// console.log(Boolean(n));

const person = {
    name: 'Benjamin',
    // walk() { },
    walk() {
        console.log(this);
    }
};
person.walk()
 //bind method
const walk = person.walk.bind(person);
walk()

// in js functions are objects
// console.log(walk);
// const targetMember = 'name';
// person[targetMember.name] = 'john';
// console.log(targetMember.name);
