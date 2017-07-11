var Bacon = require("baconjs");
var emitsEverySecondStream = Bacon.interval(1000);

emitsEverySecondStream.map(() => 'a second has passed').onValue((str) => console.log('Subscriber 1 prints => ' + str));
emitsEverySecondStream.map(() => 'a second has passed').onValue((str) => console.log('Subscriber 2 prints => ' + str));
emitsEverySecondStream.map(() => 'a second has passed').onValue((str) => console.log('Subscriber 3 prints => ' + str));
emitsEverySecondStream.map(() => 'a second has passed').onValue((str) => console.log('Subscriber 4 prints => ' + str));