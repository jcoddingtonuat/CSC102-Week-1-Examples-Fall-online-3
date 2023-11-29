function checkCreds()
{
    var Name = document.getElementById("name").value;
    var City = document.getElementById("city").value;
    var Badge = document.getElementById("badge").value;

    if (Name.length >0)
    {
       
        if (Badge >99 && Badge< 1000)
        {
            location.replace("CSC102 10 2 23 tables.html");
        }
        else
        {
            alert("invalid badge #")
        }
    }
    else
    {
        alert("not valid name length");
    }

}