// adding an eventlistener to a page from a page file

// syntax: element.addEventListen(event, function, useCapture);

var myP = document.getElementById("myP");
var myDiv = document.getElementById("myDiv");
var myP2 = document.getElementById("myP2");
var myDiv2 = document.getElementById("myDiv2");

// myP.addEventListener("click", function() {
//   myDiv.style.background = "blue";
//    myDiv.style.color = "red";
// });
myP.addEventListener("click", changeText, false);//if the the parameters are set to true then the
myDiv.addEventListener("click", changeText2, false)//outer text function is handled first and vice versa
myDiv.addEventListener("mouseover", function () {
  myDiv2.style.background = "lightblue";
})

function changeText() {
 myP2.textContent="according to a cornell publication,the answer is ~700 pounds"

}
function changeText2() {
  myP2.textContent = myP2.textContent += " the real answer"

}

// click event
// document.addEventListener('click', function (){
//   const mainHeading = document.querySelector('h1');
//   mainHeading.style.background = "red";
// })
// an EventListener thats listens for keypress
// and on keypress it removes the content with the id below


// document.body.addEventListener('keypress',function(){
//   // console.log('removing first child')
//   document.querySelector("#contain-all").firstElementChild.remove();
// })
// document.addEventListener('click',function(event){
//   // console.log(event)
// })

// creating some p tags and adding an event handlers to them

// const myCustomDiv = document.createElement('div');
//   for (var i = 0; i < 100; i++) {
//     const newElement = document.createElement('p');
//     newElement.textContent='this is a paragraph number ' + i;
//     newElement.addEventListener('click',function(){
//       console.log('A paragraph was clicked')
//     });
//     myCustomDiv.appendChild(newElement);
// }
// document.body.appendChild(myCustomDiv)


// removing an event listener
myP.removeEventListener("mouseover",changeText,false)

