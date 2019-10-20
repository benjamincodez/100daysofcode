// switch statement
//  let scores = 'd';
// console.log('switch just started now ');

//  switch (scores) {
//      case 'A':
//      console.log('hey you passed')
//      console.log('first switch just finished');
//         break;
//      case 'B':
//      console.log('whoah you made it')
//      console.log('second switch just finished');
//         break;
//      case 'C':
//      console.log('nice try you...keep pushing');
//      console.log('third switch just finished');
//        break;
//      default:
//      console.log(`${scores} ${'is Wrong'}`);

//  };
 //console.log('switch finished');
//  default means else


function caseInSwitch(val) {
   var answer = "";
    switch (val) {
       case 1:
            return answer = 'alpha'
          break;
       case 2:
          return answer = 'beta';
          break;
       case 3:
          return answer = 'gamma';
       break;
       case 4:
          return answer = 'delta';
       break;
       default:
          return " ask the buddy"
    }

   return answer
}
console.log('====================================');
console.log(caseInSwitch(1));
console.log('====================================');
