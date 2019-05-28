function handleHTTP(req,res){

    if (req.method === "GET"){
        if(req.url === "/"){
            res.writeHead(200,{"Content-type": "text/plain"});
                 ASQ (function(done){
                     setTimeout(function(){
                        done(Math.random());
                     },1000);
                 })
                 .then(function(done,num){
                     setTimeout(function(){
                         done("hello" + num);
                     }, 1000);
                 })
                 .val(function(msg){
                     res.end(msg);
                 });
                // setTimeout(function(){
                //     var num = Math.random();
                //     res.end(num);
                //     setTimeout(function(){
                //         res.end("hello"+num);
                //     },1000);
                //     },500);
        }    
        else{
            res.writeHead(403);
            res.end("fuck off ");
        }    
    }
    else{
        res.writeHead(403);
        res.end("Not working");
    }
}
var host = "localhost";
var port =8006;
var http = require("http");

var http_serv = http.createServer(handleHTTP).listen(port,host);
console.log("application is runnig");
var ASQ = require("asynquence");

