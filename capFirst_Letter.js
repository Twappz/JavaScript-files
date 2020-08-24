var name = prompt("What's your name?");
//Upper case the first letter
var nameUpper = name.slice(0,1);

//get the nemelength
var nameLength = name.length;

//get the remaining letters
var nameLetters = name.slice(1,nameLength);

//Complete code to uppercase the 1sr letter and lower case the rest
alert("Hi " + nameUpper.toUpperCase() +name.slice(1,nameLength).toLowerCase() );
