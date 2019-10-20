 // destructuring objects

const personalInformation = {
     firstName: 'benjamin',
     lastName: ' coder',
     city: 'awka',
     state:'anambra',
     zipcode: 420110

};


const {firstName, lastName} = personalInformation;
 console.log(`${firstName} ${lastName}`);


 // second step 2
 // re-assigning objects

const {firstName:fn, lastName:ln} = personalInformation;
// template literals
// console.log(`${fn} ${ln}`);


const personal = { ...personalInformation };
personal["friend"] = 'terry';

// console.log('====================================')
// // console.log(personal)
// console.log('====================================')

// console.log('====================================');
// // console.log(personalInformation);
// console.log('====================================');
