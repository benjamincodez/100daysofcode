// removing a jequery element with the .remove method

let articleItems, ul;
articleItems = $('.article-item');

ul = articleItems.find('ul');

ul.remove();


// u can also pass Element with a specific id or class and remove them


let articleItems, ul;
articleItems = $('.article-item');

ul = articleItems.find('ul');

ul.children().remove('.bold');


// jquery remove() method removes the selected element from its child element

$('#div1').remove();


// using the .empty method
// the .empty() method removes the child element from the selected element
$('#div2').empty();


// filtering elements to remove
// removes all p tags with the class test
$("p").remove(".test");


// filtering multiple classes
$("p").remove(".test, .demo");
