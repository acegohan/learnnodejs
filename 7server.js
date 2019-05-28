function handleHTTP(req,res){

    if (req.method === "GET"){
        if(/^\/\d+(?=$|[\/?#])/.test(req.url)){
            req.addListener("end",function(){
            req.url = req.url.replace(/^\/(\d+).*$/,"/$1.html");
            static_files.serve(req,res);
            });            
  
        req.resume();
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

var node_static = require("node-static");

var static_files = new node_static.Server(__dirname);
