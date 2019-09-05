var express = require("express");
var routes = express.Router();

routes.get("/", function(req, res){
	var pagedata = { title : "All Product" , pagename : "viewproduct"};
	res.render("admin/layout", pagedata);
	});

module.exports=routes;