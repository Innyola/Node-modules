/*
Module name: events

Description
The events module in Node.js provides a way of creating objects that can emit events. 
These events can then be listened to by other objects. This is a powerful way of d
ecoupling code and making it more modular.

Example */
const events = require('events');

class MyEventEmitter extends events.EventEmitter {
constructor() {
super();
}

// This method emits an event called 'myevent'
myEvent() {
this.emit('myevent');
}
}
