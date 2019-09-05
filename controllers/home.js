var express = require("express");
var routes = express.Router();
var category = require("../models/category");

routes.get("/",function(req,res){
	category.find({},function(err, result){
	var pagedata = { title : "HOME" , pagename : "home", category : result};
	res.render("layout" , pagedata)
	});
});


module.exports=routes;