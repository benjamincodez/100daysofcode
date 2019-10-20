// classes
// import { Animal,Cat } from './animal.js';

// let cat = new Animal('cat',4)

// changing values in a class
// cat.legs = 3;


// console.log(cat.type);
// console.log(cat.legs);

// calling the noise func
// console.log(cat.makeNoise);

// calling a static f unction

//  console.log(animal.return10());


 // let cat = new Cat('cat',4)
 // cat.makeNoise()
 // console.log(cat.metaData);


 //**class declaration**
 class person {
   constructor(name,year_born) {
     this.name = name;
     this.year_born = year_born;

   }
   get age(){
     return this.calcAge();
   }
   calcAge(){
     return new Date().getFullYear() - this.year_born;
   }

   what(){
     console.log(this.name + ' is a person')
   }
   currAge() {
     return `${this.name} is ${this.calcAge()} years`
   }
 }
 var ben = new person('benjamin',2003)
console.log(`${this.name} was born in ${this.year_born}`)
me.what()
//**clas expression**
// unnamed has no name

var person2 = class{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
};

// named has the person name~
var person3  = class person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
};


console.log('====================================');
console.log(me.currAge());
console.log('====================================');
