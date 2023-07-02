const express = require('express');
const app = express();

const port = 3020;
const hostname = 'localhost';

let counter = 0
app.get('/', (req,res) => {
    res.send(`counter:${counter}`);
});

app.get('/increment',(req,res) => {
    counter++;
    res.send(`counter:${counter}`);
});

app.get('/decrement',(req,res) => {
    counter--;
    res.send(`counter:${counter}`);
});

app.listen(port,()=>{
    console.log(`server running on port:${port} host:${hostname}`);
})