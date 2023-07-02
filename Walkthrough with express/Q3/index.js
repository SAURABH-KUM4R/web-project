const express = require('express');

const port = 3020;
const host = 'localhost';

const app = express();

app.get('/',(req,res) => {
    res.send('I am Homepage');
})

app.get('/about',(req,res) => {
    res.send('I am about Page');
})

app.get('/contact',(req,res) => {
    res.send('suppor@pwskills.com')
})

app.listen(port,()=>{
    console.log(`server running on port:${port} host:${host}`);
})