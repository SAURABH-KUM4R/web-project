const express = require('express');

const port = 3020;
const host = 'localhost';

const app = express();

app.get('/',(req,res) => {
    let random = Math.floor(Math.random()*10);
    res.send(`Random:${random}`);
})

app.listen(port,()=>{
    console.log(`server running on port:${port} host:${host}`);
})