var Bacon = require("baconjs");

Bacon.sequentially(100, ['a','b','c','d'])
	.scan('=>',(a,b)=> a+b)
	.onValue((value)=>console.log(value));