const event = require('events');

const emitter = new event();

console.log("Max Default Event Listner: " + emitter.getMaxListeners());
emitter.setMaxListeners(5);
console.log("After Setting: "+emitter.getMaxListeners());