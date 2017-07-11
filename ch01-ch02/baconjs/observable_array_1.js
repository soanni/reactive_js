var Bacon = require("baconjs");
var interval = 1000;
var myArray = [1,2,3,4,5,6,7,8,9,10];
Bacon.sequentially(interval, myArray).take(5).onValue((el) => console.log(el));