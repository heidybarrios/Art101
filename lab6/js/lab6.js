/**
* Author:    Heidy Barrios
* Created:   Feb/23/2021
* Public License
**/

var myTransport = ["Car", "Bike"];
var myMainRide = {
 make: "Ford",
 model : "Bronco",
 color : "Blue",
 year : 1976,
};

document.writeln("Getting around: ", myTransport, "<br>");

document.writeln("<p>My main ride: <\p><pre>",
 JSON.stringify(myMainRide, null, '\t'), "</pre>");
