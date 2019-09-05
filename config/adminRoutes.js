var express = require ("express");
var routes = express.Router();


routes.use("/", require("../controllers/admin/login"));
routes.use("/viewcategory",  require("../controllers/admin/viewcategory"));
routes.use("/addproduct",  require("../controllers/admin/addproduct"));
routes.use("/viewproduct",  require("../controllers/admin/viewproduct"));
routes.use("/users",  require("../controllers/admin/users"));

routes.get("/logout", function(req, res){
	req.session.destroy();
	res.redirect("/");
});

function backdoor(req, res, next){
	if(! req.session.is_admin_logged_in){
		res.redirect("/admin");
		return;
	}
	next()
}


module.exports=routes;