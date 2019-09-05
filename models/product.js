var connect = require("../config/connect");

module.exports.find=function(where, cb){
	connect(function(err, client){
		var db = client.db("anil");
		db.collection("product").find(where).toArray(cb);
	});
}

module.exports.insert=function(obj, cb){
	connect(function(err, client){
		var db = client.db("anil");
		db.collection("product").insertMany(obj, cb);
		
	});

}
module.exports.remove=function(where, cb){
	connect(function(err, client){
		var db = client.db("anil");
		db.collection("product").remove(where, cb);
	});
}
module.exports.update=function(where, obj, cb){
	console.log(where);
	console.log(obj);
	connect(function(err, client){
		var db = client.db("anil");
		db.collection("product").updateMany(where, { $set : obj }, cb);
	});
}