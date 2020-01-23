const EventEmitter = require('events')

//Create class
class MyEmitter extends EventEmitter { }

//Init Object
const myEmiter = new MyEmitter();

//Event listener
myEmiter.on('event', ()=> console.log('Event Fired'));

//Init event
myEmiter.emit('event');
myEmiter.emit('event');
myEmiter.emit('event');
myEmiter.emit('event');