var connect = require("../config/connect");

module.exports.find=function(where, cb){
	connect(function(err, client){
		var db= client.db("anil");
		db.collection("category").find(where).toArray(cb);

	});
}

module.exports.insert=function(obj, cb){
	connect(function(err, client){
		var db = client.db("anil");
		db.collection("category").insert(obj, cb)
	});
}

module.exports.remove=function(where, cb){
	connect(function(err, client){
		var db = client.db("anil");
		db.collection("category").remove(where, cb);
	});
}

module.exports.edit=function(where, obj, cb){
	connect(function(err, client){
		var db = client.db("anil");
		db.collection("category").updateMany(where, {$set : obj}, cb);
	});
}