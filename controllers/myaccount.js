var express = require("express");
var routes = express.Router();

routes.get("/" , function(req , res){
	var pagedata = { title : "My Account" , pagename : "myaccount"}
	res.render("layout" , pagedata);
});

module.exports= routes;