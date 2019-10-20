
// conditionals statement

let num = 5;
// (num === 6) equality
// (num === 6 && true === true) else
// (num === 5 || true === true) runs
//  if (num === 5 || true === true){
//      console.log('Runs');
//  }else if (false) {
//      console.log('else if');
//  }else{
//      console.log('else 🤗 🤗');
//  }
// console.log('====================================');
// console.log('just started logging counts');
// console.log('====================================');
// console.log('====================================');
// console.log(10 === 10 && 5 < 4);
// console.log('====================================');
// console.log(10 === 10 || 5 < 4);
// console.log('====================================');
// console.log('====================================');
// console.log(5 >= 5 || 4 > 4) && 3 + 2 === 5;
// console.log('====================================');
// console.log('====================================');


// let ben = 'coder';

// switch ('ben'){
//     case 'developer': console.log('====================================');
//     console.log('ben isnt really a developer or is he');
//     console.log('====================================');
//     break;
//     case 'programmer': console.log('====================================');
//     console.log('yea ben is a programmer');
//     console.log('====================================');
//     default: console.log('====================================');
//     console.log(`${'ben is a true'} ${ben}`);
//     console.log('====================================');
// }


function testSize(num) {
    if (num < 5) {
        return "Tiny";
    }else if (num < 10) {
        return 'Small';
    }else if (num < 15) {
        return 'Medium';
    } else if (num < 20) {
        return 'Large';
    }else {
        return 'Huge';
    }
}

console.log(testSize(17));

