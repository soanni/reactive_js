var fs = require('fs');
var Bacon = require("baconjs");
var FILE_PATH = './baconInterval.js'
var readStream = fs.createReadStream(FILE_PATH, 'utf8');

//readStream.on('data', (content) => console.log(content))
var eventStream = Bacon.fromEvent(readStream, 'data');
eventStream.onValue((content) => console.log(content));