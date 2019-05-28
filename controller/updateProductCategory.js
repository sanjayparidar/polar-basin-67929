var express=require("express");
var router=express.Router();
var user = require("../model/common");
const { check,validationResult } = require('express-validator/check');
var jwt=require("jsonwebtoken");
var Mongo=require("mongodb");

router.post("/",function (req, res){
	var request = req.body;
	var data={ };
	if(request.id){

		var updateData = {};
		updateData.category_name = request.category_name;

		var id = new Mongo.ObjectID(request.id);

		user.updateWhere({'_id' : id}, updateData, 'product_category', function(err, results){
			if(err){
				data.message = 'Invalide Request';
				data.status = 300;
				res.send(data);
			}
			
			data.message = 'success';
			data.status = 200;
			res.send(data);
		});
	}else{
		data.message = 'Invalide Request';
		data.status = 300;
		res.send(data);
	}
});
		
module.exports=router;