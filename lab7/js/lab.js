/*
Author:   Heidy Barrios
Created:  02/20/2021
Public License
*/

function sortName() {
  // Opens prompt to take user input
  var userName = window.prompt("Hi, enter name here.");
  // split: Splits the string  into an array of characters.

  //   function: If a and b are the same, sort them out the same.

  // join: Creates returnable string of array elements.
  return userName.split('').sort(function (a, b) {
    if(a==b) {
      return 0;
    } else {
      return a.localeCompare(b);
    }
  }).join('');
}

document.writeln("Your name: <br>", sortName(), "<br>");
