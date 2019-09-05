var express = require("express");
var routes = express.Router();
var product = require("../../models/product");
var category = require("../../models/category");
var upload = require("express-fileupload");
var random = require("randomstring");
var flash = require("flash");
var path = require("path");

routes.get("/", function(req,res){
	category.find({}, function(err, result){

	var pagedata = { title : "Add Product", pagename : "addproduct", result : result, message : req.flash("msg")};
	res.render("admin/layout", pagedata);
	});
});
routes.post("/", function(req, res){
	console.log(req.body);
	console.log(req.files);
	var fileObj = req.files.image;
	var name = fileObj.name;
	var size = fileObj.size;

	var arr = name.split(".");
	var n = arr.length;
	var ext = arr[n-1];

	if (ext == "jpg" || ext == "jpeg" || ext == "png" || ext == "gif" || ext == "bmp"){
		if(size <= 1024*1024){
			var rand_string = random.generate(21);

			var newname = rand_string + "." + ext;
			fileObj.mv(path.resolve()+ "/public/product/" + newname, function(err){
				req.body.price=parseInt(req.body.price);
				req.body.discount=parseInt(req.body.discount);
				product.insert(req.body, function(err, result){
					res.redirect("/admin/addproduct");
					});
			})
		}else{
			req.flash("msg", "File size is too long...")
			res.redirect("/admin/addproduct");
		}
	}else{
		req.flash("msg", "This type of file is not supported try jpg, jpeg, png, gif..")
		res.redirect("/admin/addproduct");

	}


});
module.exports=routes;