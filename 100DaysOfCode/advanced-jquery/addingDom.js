// vanilla javascript
let div = document.createNode('div');
div.innerHTML = " hello benji";
let parent = document.querySelector('#parent');
parent.apppendChild('div');



// jequery


let firstArticleItem;

firstArticleItem = $('.article-item').first();
// add after ---last last
firstArticleItem.append('<img src="http://placepoppy.it/200/300">');
// add before  ---first first
firstArticleItem.prepend('<img src="http://placepoppy.it/200/300">');



//                          Div
//                          ||
// 						    Div
//							||

//                family1                family2
//                                          ||
//             /        \                  bruce
//          alex         taylor
//			 /             \               /    \
//     jane             bob
//                                   madison  hunter
//


let family1, family2, bruce, madison, hunter;

family1 = $('#family1');

family2 = $('<div id = "family2"><h1> family 2 </h1></div>');
bruce = $('<div id = "#bruce"><h2>bruce </h2></div>');
madison = $('<div id = "#madison"><h3>madison</h3></div>');
hunter = $('<div id = "#hunter"><h3>hunter</h3></div>');

family2.insertAfter(family1);
family2.append(bruce);
bruce.append(madison);
bruce.append(hunter)
