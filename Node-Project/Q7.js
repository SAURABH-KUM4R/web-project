const server = require('http');
server.createServer((request,response)=>{
    console.log(request);
    response.write("<h1>I am Happy to learn full stack we dev.</h1>");
    response.end();
}).listen(5000)