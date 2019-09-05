var express = require("express");
var routes = express.Router();
var mongo = require("mongodb");
var category = require("../../models/category");

routes.get("/getCate", function(req, res){
	category.find({}, function(err, result){
		res.send(result);
		console.log(result);
	})
});
routes.post("/add", function(req, res){
	console.log(req.body);
	category.insert(req.body, function(err, result1){
		res.send(result1);
		console.log(result1);
	})
})
routes.post("/del", function(req, res){
	var _id = mongo.ObjectId(req.body._id);
	category.remove({_id : _id}, function(err, result){
		res.send(result);
	})
})
routes.post("/edit", function(req, res){
	var _id = mongo.ObjectId(req.body._id);
	console.log(_id);
	category.edit({_id : _id}, req.body, function(err, result){
		res.send(result);
	})
})


module.exports=routes;