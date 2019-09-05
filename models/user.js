var connect = require("../config/connect");


module.exports.insert=function(obj , cb){
	connect(function(err, client){
		var db = client.db("anil");
		db.collection("user").insert(obj , cb);

	});
};

module.exports.find=function(where, cb){
	connect(function(err, client){
		var db = client.db("anil");
		db.collection("user").find(where).toArray(cb);
	});
};