var connection = require('../config/connect');
var config = require("../config/db");
var mongo =require('mongodb')

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

module.exports.findAllByLimit = function(obj, collectionName, cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection(collectionName).find({},obj).toArray(cb);
	});
}

module.exports.findwhereAllByLimit = function(where,obj, collectionName, cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection(collectionName).find(where,obj).toArray(cb);
	});
}

module.exports.deleteData = function(obj, collectionName, cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection(collectionName).deleteOne(obj, cb);
	});
}

module.exports.find=function(collectionName,cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection(collectionName).find().toArray(cb);
	});
}

module.exports.findaggregate=function(collectionName,cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection(collectionName).aggregate([
			{ $lookup:
			  {
				from: 'product_category',
				localField: "mongo.ObjectID('categoryid')",
				foreignField: '_id',
				as: 'fromItems'
			  }
			},
			
            
			{
				$replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$fromItems", 0 ] }, "$$ROOT" ] } }
			 },
			 { $project: { fromItems: 0 } }
		
	     ]).toArray(function(err,result){
			 console.log(result)
		 });
	});
}
// var myquery = { address: 'Mountain 21' };
//   dbo.collection("customers").deleteOne(myquery, function(err, obj) {
//     if (err) throw err;
//     console.log("1 document deleted");
//     db.close();
//   });

// module.exports.find=function(cb){
	// connection.init(function(err, client){
		// var db = client.db(config.dbName);
		// db.collection('user').find().toArray(cb);
	// });
// }