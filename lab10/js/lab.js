//Lab 10: Sort name
//* Heidy Barrios
// March 10, 2021
// Public Domain

function sortName() {
  // get name from text box
  var name = document.getElementById("user-name").value;
  // split: Splits the string into an array of characters.
  // sort: Sorts the array in lexicographic order.
  //   function: If a and b are the same, make the same and sort them as if
  //      its the same one.
  // join: creates a returnable string of array elements.
  name = name.split('').sort(function (a, b) {
    if(a==b) {
      return 0;
    } else {
      return a.localeCompare(b);
    }
  }).join('');

  // write to output div
  document.getElementById("output").innerHTML = name;
  return name;
}

document.getElementById("my-button").addEventListener("click", sortName);
document.getElementById("first").addEventListener("click" , changeBack);
