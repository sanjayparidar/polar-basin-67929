var connection = require('../config/connect');
var config = require("../config/db");

module.exports.findWhere = function(obj, collectionName, cb){
	connection.init(function(err, client){
		
		var db = client.db(config.dbName);
		
		db.collection(collectionName).find(obj).toArray(cb);
	});
}


module.exports.insert=function(obj, collectionName, cb){
	connection.init(function(err, client){
		
		var db = client.db(config.dbName);
		db.collection(collectionName).insert(obj, cb)
	});
}

module.exports.updateWhere=function(where, obj, collectionName, cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection(collectionName).update(where, {$set : obj}, cb);
	});
}

// module.exports.find=function(cb){
	// connection.init(function(err, client){
		// var db = client.db(config.dbName);
		// db.collection('user').find().toArray(cb);
	// });
// }