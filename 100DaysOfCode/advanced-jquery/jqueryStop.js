// using the jquery stop method to staop an animation
$(document).ready(function () {
	$('#flip').click(function () {
		$('#panel').slidDown(5000);
	});
	$('#stop').click(function () {
		$('#panel').stop();
	})
})


// this code should be written inline or in a stylesheet

/*
*
   #panel, #flip {
    padding: 5px;
    font-size: 18px;
    text-align: center;
    background-color: #555;
    color: white;
    border: solid 1px #666;
	border-radius: 3px;
   }
 *

 #panel {
    padding: 50px;
    display: none;
}
 */

//  then also create three an an html element and give these ids to them
// a button   => stop
// and two div    =>  flip and panel

