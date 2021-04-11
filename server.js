var http = require('http')
var os = require('os')

console.log("Starting server");
http.createServer((req,res)=>{
 
    console.log("req " + req.connection.remoteAddress);
    res.writeHead(200);
    res.end("hello world from " + os.platform + " " + os.hostname + "!");
    
}).listen(3000,()=>{console.log("Is running on port : " + 3000);});