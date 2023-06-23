const Event = require('events');

const emitter = new Event();

const message = (name) =>{
    console.log(`Thanks for subscribing ${name}`);
}

emitter.addListener("response",message);
// emitter.on("response",message);

emitter.emit("response","College Wallah");