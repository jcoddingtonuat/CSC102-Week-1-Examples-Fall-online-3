function strings()
{
    var string1 = document.getElementById("initString").value;
    var string2 = document.getElementById("2ndString").value;

    document.getElementById("str1Display").innerHTML = "You input " + string1;
    document.getElementById("str2Display").innerHTML = "You input " + string2;

    //concatenate - add 2 strings together

    var string3 = string1 + string2;
    var len = string3.length;

   // document.getElementById("strUpdate").innerHTML = "concatenate of 1 and 2 = " + len;

   // 1st element of string = 0.  If I want the first 3 chars, (0,3)

   string3 = string1.substring(0,3);

   //document.getElementById("strUpdate").innerHTML = "substring starting at 0 length 3 = " + string3;

   string3 = string1.replace(/qwe/, "asd");
   //document.getElementById("strUpdate").innerHTML = "replace qwe with asd 1x  = " + string3;

   string3 = string3.toLowerCase();
   string3 = string3.replace(/qwe/g, "asd");
//document.getElementById("strUpdate").innerHTML = "replace all qwe with asd " + string3;


// reverse 1 - using split
string3 = string1.split("");
//document.getElementById("strUpdate").innerHTML = "SPLIT " + string3 ;
string3 = string3.reverse();
//document.getElementById("strUpdate").innerHTML = "REVERSE " + string3 ;
string3 = string3.join("");
//document.getElementById("strUpdate").innerHTML = "JOIN " + string3 ;

string3 = string1;
//reverse using for loop
var i;
var reversed = "";
for (i= string3.length-1; i >=0;i--)
{
    reversed +=string3[i];  // reverse = reverse + string3[i]

}

document.getElementById("strUpdate").innerHTML = "reversed using loop " + reversed;
}