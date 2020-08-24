var name = prompt("What's your name?");
var nameUpper = name.slice(0,1);
var nameLength = name.length;
var nameLetters = name.slice(1,nameLength);
// alert(nameLetters);

// alert("Hi " + nameUpper.toUpperCase() + nameLetters);
alert("Hi " + nameUpper.toUpperCase() + name.slice(1,nameLength));
