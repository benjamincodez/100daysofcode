// rightous coder
// syntx var p = new  proxy(target, handler);
// the proxy object is used to define custom behaviour when the properties of a target object are accessed
// example 1;

var handler = {
    get(target, key) {
        return key in target ? target[key] : 37;
    }
}

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

// console.log(p.a,p.b);
// console.log('c'in p,p.c);



let validator = {
    set: ((obj, prop, value) => {
        if (prop === 'age') {
            if (typeof value !== 'number' || Number.isNaN(value)) {
                console.log('====================================');
                console.log('Age must be  number');
                console.log('====================================');
            }
            if (value <= 0) {
                console.log('====================================');
                console.log('Age must be a positive number');
                console.log('====================================');
            }
        }
        obj[prop] = value;
        return true;
    })
};
let person = new Proxy({}, validator)
person.age = 'young';
console.log('====================================');
console.log(person.age);
console.log('====================================');
person.age = -30;
person.age = 100;
console.log('====================================');
console.log(person.age);
console.log('====================================');
