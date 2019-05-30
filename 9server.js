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

function handleIO(socket){
    function disconnect(){
        console.log("client disconnected");

    }
    console.log("client connected");
    socket.on("disconnect",disconnect);

    socket.on("typeit",function(msg){
        socket.broadcast.emit("messages",msg)
    });
    
    var intv = setInterval(function(){
        socket.emit("hello",Math.random());
    },1000);
}
var host = "localhost";
var port =8006;
var http = require("http");

var http_serv = http.createServer(handleHTTP).listen(port,host);
console.log("application is running");
var ASQ = require("asynquence");

var node_static = require("node-static");

var static_files = new node_static.Server(__dirname);
var io = require("socket.io").listen(http_serv);



io.on("connection",handleIO);