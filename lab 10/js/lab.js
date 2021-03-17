/*
Author: Heidy Barrios
Date: February 26, 2021
Public License
*/

//using var output get elements.


var outputEl = document.getElementById("output"); // Get element
var new1El = document.createElement("p"); // Creates <p> element
new1El.innerHTML = "What is going on here?!"; // Sets the P tag's text
new1El.setAttribute("style","color: white"); // makes the p white
var new2El = document.createElement("h3"); // creates <h3> element
new2El.innerHTML ="This text is in an h3 tag!"; // set h3 text
new2El.setAttribute("style","color: white"); // make h3 white
outputEl.appendChild(new2El);
outputEl.appendChild(new2El);

document.writeln(outputEl);
