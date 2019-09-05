var express = require("express");
var routes = express.Router();
var users = require("../../models/user");

routes.get("/", function(req, res){
 users.find({}, function(err, result){
	var pagedata ={ title : "All Users", pagename : "users", result : result};
	res.render("admin/layout", pagedata);
 	
 });
});

module.exports=routes;