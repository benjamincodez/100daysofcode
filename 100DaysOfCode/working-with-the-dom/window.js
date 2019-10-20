// window object:size,open.close,move

// the re-size method is for  resizing the window
// the update function is for updating the window with the current event
// the window object is for working with the browser window
window.addEventListener('resize',update);
// for sending the code to the html page
let x = window.document.getElementById("demo");

update();
//our update() function
function update() {
    // the code to be sent
x.innerHTML = "🌠 Browser with: " + window.innerWidth + " 🤔 height:  " + window.innerHeight + ". 🌠" ;
}
let addr = 'http://link.tr/benjamincode';
// for opening up a new window

// just like Browser.open() in pyhton

// let newWin = window.open('','newWindow',"menubar=true,location=true,resizable=false,scrollbars=false,wdth=400,height=300,top=200,left=200");

// function move(){
//     newWin.moveBy(50,0);
//     newWin.focus();
// }
