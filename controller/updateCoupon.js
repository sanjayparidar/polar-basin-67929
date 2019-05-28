var express=require("express");
var router=express.Router();
var coupon = require("../model/common");
const { check,validationResult } = require('express-validator/check');
var jwt=require("jsonwebtoken");
var Mongo=require("mongodb");

router.post("/",function (req, res){
	var request = req.body;
	var data={ };
	if(request.id){

		var updateData = {};
		updateData.coupon_name = request.coupon_name;
		updateData.coupon_code = request.coupon_code;
		updateData.discount_type = request.discount_type;
		updateData.discount_amount = request.discount_amount;
		updateData.start_date = request.start_date;
		updateData.end_date = request.end_date;

		var id = new Mongo.ObjectID(request.id);

		coupon.updateWhere({'_id' : id}, updateData, 'coupon', function(err, results){
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