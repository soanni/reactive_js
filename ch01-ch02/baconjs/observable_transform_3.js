var Bacon = require("baconjs");
Bacon.interval(1000)
	.map((i) => new Date())
	.filter((date) => date.getSeconds() % 2 == 0)
	.map((date) => 'The number in the second part of the date ' + date.toISOString() + ' is ' + date.getSeconds() + ' which is even number')
	.log();