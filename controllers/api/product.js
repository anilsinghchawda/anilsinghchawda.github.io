var express = require("express");
var routes = express.Router();
var product = require("../../models/product");
var mongo = require("mongodb");

routes.get("/getPro", function(req, res){
	product.find({}, function(err, result){
		res.send(result);
		// console.log(result);
	})
})
routes.post("/del", function(req, res){
	var _id = mongo.ObjectId(req.body._id);
	product.remove({ _id : _id}, function(err, result){
		res.send(result);
	})
})
routes.post("/edit", function(req, res){
	console.log(req.body);
	var _id = mongo.ObjectId(req.body._id);
	product.update({ _id : _id}, req.body, function(err, result){
		console.log(result);
		res.send(result);
	})
})
routes.get("/add", function(req, res){
	console.log(_id);
})
module.exports=routes;