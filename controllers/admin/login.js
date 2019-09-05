var express = require("express");
var routes =  express.Router();
var admintable = require("../../models/admintable");
var sha1 = require("sha1");
// var flash = require("flash");

routes.get("/", function(req, res){
	var pagedata = { title : "Admin Login" , pagename : "login" , message : req.flash("msg")};
	res.render("admin/login", pagedata );
});

routes.post("/" , function(req, res){
	// req.body.password = sha1(req.body.password);
	var u = req.body.username;
	var p = req.body.password;
	admintable.find({ username : u }, function(err, result){
			// if(err){
			// 	console.log("Finding error in login of admin");
			// }
		
	if(result.length==1){ 
		if(result[0].password==sha1(p)){
			req.session._id = result[0]._id;
			req.session.fullname = result[0].username;
			req.session.is_admin_logged_in =true;
	// console.log(req.session.fullname);
			res.redirect("/admin/addproduct");
		}else{

		req.flash("msg", "Password is Incorrect");
		res.redirect("/admin");
		}

	}else{
		req.flash("msg", "Username and Password are Incorrect");
		res.redirect("/admin");
	}

});
});

module.exports=routes;







