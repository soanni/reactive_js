var Bacon = require("baconjs");
Bacon.interval(1000)
	.map((i) => new Date())
	.log();