// what we will be looking at //
// tags
// classes
// ids
// selectors()
// parent()
// parents()
// siblings()
// find()
// children()
// .toggleClass()
// .next();
// .attr()
// slecting by tags is less helpfull
let listElements = $('li');
let Divs = $('div');
console.log(listElements);


// classes i  jquery

// classes are multi- threaded in jqury
let articles = $('.articles-items');//selects all class with thats name
console.log(articles);

// ids in jquery

//ids re single thhreaded.....they return only one element
let myId = $('#fisrtsId');
console.log(myID);


// selecting the parent element
//with the .parent() method

//                        john audrey      ---great grand parent
//                          ||
// 						jerry juddy        --grand parent
//							||
//                      marksuzanne         --parent
//
//                    /             \
//                max               cameron     --siblings
//				 /                     /    \
//              kagure                /      \
//                                   taylor    grant    --children
//
// parents siblings find

let articlelist, h1, kids, parents;

articlelist = $('.aricle-list');
h1 = articlelist.siblings('h1');
kids = articlelist.find('*');
parents = articlelist.parents('div');
console.log(articlelist, h1, kids, parents);

// toggleClass

let featured;
featured = $('.featured');
featured.toggleClass('featured');

// next()

let article2, article3;
article2 = $('.featured');
article3 = article2.next();
article2.toggleClass('featured');
article3.toggleClass('featured');


// attr()

let navList, firstItem, link;
navList = $('.nav-list');
firstItem = navList.children().first();
link = firstItem.find('a')
link.attr('href', '#1');
