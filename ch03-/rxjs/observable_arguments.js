var Rx = require('rx');
var observableFromArgumentsFactory = function() {
	return Rx.Observable.from(arguments);
};
observableFromArgumentsFactory(0,1,2).subscribe((a) => console.log(a));
//Rx.Observable.from([0,1,2], (a) => a*2).subscribe((a) => console.log(a));