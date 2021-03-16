/*
Author: Francisco Amezcua
Date: 02/10/2021
Public License
*/

var outputEl = document.getElementById("output"); // Get element
var new1El = document.createElement("p");
new1El.innerHTML = "What is going on here?!";
new1El.setAttribute("style","color: white"); // makes the p white
var new2El = document.createElement("h4"); // creates <h3> element
new2El.innerHTML ="A text tag for h3."; 
new2El.setAttribute("style","color: white"); // make h3 white
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

document.writeln(outputEl);
