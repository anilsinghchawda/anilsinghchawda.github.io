var express =  require("express");
var routes = express.Router();

routes.use("/category", require("../controllers/api/category"));
routes.use("/product", require("../controllers/api/product"));

module.exports=routes;