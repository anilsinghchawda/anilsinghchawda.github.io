var express = require("express");
var routes =  express.Router();
var category = require("../../models/category");
var mongodb = require("mongodb");
// var category = require("");

routes.get("/", function(req, res){
	var pagedata = { title : "View Category", pagename : "viewcategory"};
	res.render("admin/layout",  pagedata);
});


routes.get("/delete", function(req, res){
	var id = req.query.id;
	// console.log(req.query.id);
	var _id =  mongodb.ObjectId(id);
	category.remove({ _id : _id}, function(err, result){
		res.redirect("/admin/viewcategory");
	});
});

module.exports=routes;