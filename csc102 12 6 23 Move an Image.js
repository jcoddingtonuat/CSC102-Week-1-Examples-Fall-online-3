//global variables go here
var interValid = 0;
let change = 100;


function startMove()
{
    var down = 1;
    var image = document.getElementById("imgdog");
    interValid = setInterval(function() {
     //   image.style.left = change + "px";
        image.style.top = change + "px";
        document.getElementById("msg").innerHTML = "x = " + image.style.left + " y = " + image.style.top;
    
        
        change += 5;// change = change + 5;
    
    },200);// change # to change how fast this moves in ms
    //picture at bottom is approx 550px
}

function stopMove()
{
    function interValid()
    {clearInterval(interValid)}
}