// using the insertAdjacentHtml
// which takes two argument
insertAdjacentHtml(position,text);
// and valid posible positions are

//  <!--beforebegin-->
//     <!--<p>-->
//      <!--afterbegin-->
//        hey where am i Guo!
//      <!--beforeend-->
//      <!--</p>-->
//  <!--afterend-->

// ok thats enough for this dom element
// lets see how it works
let firstDiv = document.querySelector('#divOne');
firstDiv.insertAdjacentHtml(afterend,'<div id="divTwo">second div</div>');
// hey ben am lost whats all this tags for ?
// returns
<div id="divOne"></div><div id="divTwo"></div>
// finding the firstchild of an element
let cardContainer = $0;
cardContainer.firstElementChild;

//returns all the content of the child element;
// and  if you want  to work on it like lets remove it from the page

const firstCard = cardContainer.firstElementChild;
cardContainer.removeChild(firstCard);

// and thats it its removed
