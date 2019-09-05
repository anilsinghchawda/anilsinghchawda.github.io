var express = require("express");
var routes  = express.Router();
var user = require("../models/user");
var sha1 = require("sha1");
var flash = require("flash");


routes.get("/",function(req,res){
	var pagedata = { title : "Login" , pagename : "login" , message : req.flash("msg") };
	res.render("layout", pagedata);
});

routes.post("/",function(req , res ){
	console.log("req.body");
	var u = req.body.username;
	var p = req.body.password;

	user.find({ username : u }, function(err , result){
		console.log(result);
		if (result.length==1)	
		{
			if (result[0].password==sha1(p))
			{
				// console.log("password is right");
				req.session._id = result[0]._id;
				req.session.fullname=result[0].fullname;
				req.session.is_user_logged_in = true;
				res.redirect("/shop");
			}
			else{
				req.flash("msg" , "Password is INCORRECT")
				res.redirect("/login");
			}

		}
	else{
		req.flash("msg" , "This Username and Password are Incorrect ");
		res.redirect("/login");
	}
	})

});




module.exports=routes;