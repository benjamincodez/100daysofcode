// promises asyc and wait
const apiurl  = 'https://fcctop100.herokuapp.com/api/focus/alltime';

// using async and wait

// async function getTop100Campers(){
//     const response = await fetch(apiurl);
//     const json = await response.json();

    // console.log(json[0])
// }

// function getTop100Campers(){
//      fetch(apiurl)
//      .then((r) => r.json())
//      .then((json) => {
//          console.log(json[0]);
//      }).catch((error) => {
//          console.log('failed');
         
//      });
// }
//    getTop100Campers();

//    challenge
// using promises

function resolveAfter3Seconds(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        },3000

        )
    })
}



// async function resolveAfter3Seconds() {
//     const p = await new Promise (resolve => {
//         setTimeout(() => {
//             resolve('resolved')
//         })
//     })
    
// }
// solution to challenge

// resolveAfter3Seconds().then((data) =>{
//     console.log(data);
    
// })

// another way

 async function getAsyncData(){
     const result = await resolveAfter3Seconds();
     console.log(result);
     
 }getAsyncData();