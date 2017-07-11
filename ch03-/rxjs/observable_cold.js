var Rx = require('rx');
var observable = Rx.Observable.from([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
observable.subscribe((a) => console.log('first observer receives => ' + a));
//observable.subscribe((a) => console.log('second observer receives => ' + a));

setTimeout(() => {
	observable.subscribe((a) => console.log('second observer receives => ' + a));
}, 1000);