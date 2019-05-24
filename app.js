var express = require("express");
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));

var upload = require('express-fileupload');
app.use(express.static(__dirname+"/public"));

app.use(express.json());
app.use(bodyparser());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(upload());


app.use(function (req, res, next) {    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(require("./controller/default"));

app.listen(process.env.PORT || 2000 ,function(){
	console.log("server")
})


