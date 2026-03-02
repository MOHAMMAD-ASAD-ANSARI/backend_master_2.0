let express = require("express");
let bodyParser = require("body-parser");
let app = express();
app.use(bodyParser.urlencoded({extended : false}));
console.log(__dirname + "/views/index.html");
app.use(function(req,res,next){
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});
app.post("/name", function(req,res){
    res.json({name : req.body.first + " " + req.body.last});
});
app.get("/name", function(req,res){
    let x = req.query; 
    res.json({"name" : `${x.first} ${x.last}`});
});
app.get("/:word/echo" , function(req,res){
    res.json({"echo" : req.params.word});
});
app.get("/now", function(req,res,next){
    req.time = new Date().toString();
} , function(req,res){
    res.send({"time" : req.time});
});
app.get("/json", function(req,res){
    res.json({"message": "Hello json"});
});
app.use("/public",express.static(__dirname + "/public"));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;