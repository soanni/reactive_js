var Bacon = require("baconjs");
var emitsEverySecondStream = Bacon.interval(1000);

emitsEverySecondStream
	.map((i) => new Date())
	.filter((date) => date.getSeconds() % 2 == 0)
	.map((date) => 'The number in the second part of the date ' + date.toISOString() + ' is ' + date.getSeconds() + ' which is even number')
	.log();

emitsEverySecondStream.map(() => 'a second has passed').log();