var express = require("express");
var app = express();
var routes = require("./config/routes");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var cache = require("nocache");
var flash = require("flash");
var upload = require("express-fileupload");
var random = require("randomstring");
var mongo  = require("mongodb");



app.set('view engine', 'ejs');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(express.static(__dirname +"/public/"));
app.use(bodyParser()); 
app.use(cookieParser());
app.use(session({ secret : "anil"}));
app.use(cache());
app.use(flash());
app.use(upload());

app.use(function(req,res,next){
	res.locals.logo = "AnnData";
	res.locals.session = req.session;
	next();
});
app.use(routes);

var port = process.env.PORT || 3000;
app.listen(3000, function(){
	console.log("Server Running for Pro on port", port);
});
