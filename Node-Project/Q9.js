const Event = require('events');

const emitter = new Event();

const message = (name) =>{
    console.log(`Thanks for subscribing ${name}`);
}

emitter.addListener("response",message);
emitter.emit("response","College Wallah");
console.log("Before Removing event Listner");

emitter.removeListener("response",message);
emitter.emit("response","College Wallah");
console.log("After Removing event Listner");