var express = require ("express");
var routes = express.Router();
var sha1= require("sha1");
var user = require("../models/user");


routes.get("/", function(req,res){
	var pagedata = { title : "SignUp" , pagename : "sign"};
	res.render("layout" , pagedata);
});

routes.post("/", function(req , res){
	
	console.log("req.body");

	req.body.password = sha1(req.body.password);

	user.insert(req.body, function(err , result){
		res.redirect("/login");
	});
});


module.exports=routes;