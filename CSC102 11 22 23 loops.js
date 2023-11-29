var num1;//global

function Forloop()
{
    var currTime = 10;// local
    for (var i =1; i<12;i++)
    {
        setTimeout(function () {
            document.getElementById("countdowntimer").innerHTML = "the time left is " + currTime;
            currTime = currTime -1;  //currTime--;
        },1000*i);
    }
}   
    function Doloop()
    {
        var currTime = 10;// local
        var i =1;
        do 
        {
            setTimeout(function () {
                document.getElementById("countdowntimer").innerHTML = "the time left is " + currTime;
                currTime = currTime -1;  //currTime--;
            },1000*i);
            i+=1;
        } while (i < 12);
    }
    function Whileloop()
    {
        var currTime = 10;// local
        var i =1;
        while (i < 12)
        {
            setTimeout(function () {
                document.getElementById("countdowntimer").innerHTML = "the time left is " + currTime;
                currTime = currTime -1;  //currTime--;
            },1000*i);
            i+=1;
        } ;
    }
     
     

