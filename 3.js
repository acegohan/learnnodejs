function printHelp(){
    console.log("3.js  Rohan Kalra");
    console.log("--help   for help");
    console.log("--file={name}    to print name of the file");
    console.log("");
}


var args = require("minimist")(process.argv.slice(2),{string: "file"});

if (args.help|| !args.file){
    printHelp();
    process.exit(1);
}

var hello = require("./helloworld3.js");
hello.say(args.file)
    .val(function(contents){
        console.log(contents.toString());
    })
.or(function(err){
    console.error("error" + err);
})