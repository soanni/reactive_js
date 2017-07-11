var Bacon = require("baconjs");
var promiseObj = Promise.resolve(10);
// transforming Promise to EventStream
Bacon.fromPromise(promiseObj).onValue((value) => console.log(value));