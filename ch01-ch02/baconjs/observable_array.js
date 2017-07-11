var Bacon = require("baconjs");

var myArray = [1,2,3,4,5,6,7,8,9,10];
Bacon.fromArray(myArray).take(5).onValue((el) => console.log(el));