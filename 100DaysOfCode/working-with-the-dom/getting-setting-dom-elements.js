// getting and setting dom elements
// with .innerHTML |  .innerText | .textContent

// surpposing header tag has many text inside and the <p> tag has a hidden   element with the style of display none

<header class="header">
    <h1 class="header-one">ben this is cool </h1>
      <h1> yea i know that bro! </h1>
        <p style="display:none"> follow for more stuffs </p>
</header>

// now accessing the header elements with .innerText will return
//                   ------innerText-------

let heading = document.querySelector('.header');
heading.innerText; //returns only the visible text

  "
       ben this is cool
       yea i know that bro!
  "

//        ----------  without the hidden text ----------
//              ----------- textContent---------
heading.textContent; //returns the whole content regardless of the css
  "
        ben this is cool
        yea i know that bro!
        follow for more stuffs
  "
//                      ----innerHTML-----
// using the innerHTML renders the whole text as an html elements
//an retrieves the whole text as html content
let heading_one = document.querySelector('.header-one');
heading_one.innerHTML="coding is <em>awesome</em>";
 // returns coding is awesome
 //                     -----innerText-------
heading_one.innerText="coding is <em>awesome</em>";
//returns  coding is <em>awesome</em>
