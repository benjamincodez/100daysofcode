// using the createElement method
cosnt  container = document.createElement('span');
container; //logging the variable
// returns
<span></span>

// adding some text to it

container.textContent = ',it worked';
// logging the container variable again
container;
// returns
<span> it worked </span>
// whoah it worked buh
// how do we add it to the page

// the appendChild element
// ok buh where do you want to append it
// assuming the h1 element has a text inside already;
<h1>Oh really </h1>
let mainHeading = document.querySelector('h1');
mainHeading.appendChild(container);
