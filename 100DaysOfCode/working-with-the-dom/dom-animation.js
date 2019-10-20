/** Animation */

function myMoves() {
    // get the elem
    var elem = document.getElementById('myAnimation');
    var pos = 0;
    var id = setInterval(frame, 20);
    function frame() {
        if (pos === 350) {
            //stop function
            elem.style.background = 'red';
            clearInterval(id)
        } else {
            // if is not continue
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
            elem.style.background = 'yellow';
        }
    }
}

var item = document.getElementById('item');
item.animate([
    { transform: 'scale(1)', background: 'red', opacity: 1, offset: 0 },
    { transform: 'scale(.5) rotate(270deg)', background: 'blue', opacity: '.5', offset: .2 },
    { transform: 'scale(1) rotate(0deg)', background: 'red', opacity: '1', offset: 1 },
],
    {
        duration: 1050,//milliseconds;
        easing: 'linear',//linear or a bezier curve etc;
        delay: 10,//milliseconds
        iterations: Infinity, //or a number
        direction: 'alternate',//normal or reverse etc
        fill:'auto'// backward,both,none,auto
   }

)
