var Bacon = require("baconjs");

var stringProperty = Bacon.fromArray(['a','b','c','d'])
						.scan('=>',(a,b) => a+b);

stringProperty.log();