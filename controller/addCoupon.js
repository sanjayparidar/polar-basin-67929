var express=require("express");
var router=express.Router();
var coupon = require("../model/common");
const { check,validationResult } = require('express-validator/check');
var jwt=require("jsonwebtoken");
var Mongo=require("mongodb");
var moment = require('moment');

router.post("/",function (req, res){
	var request = req.body;
	var data={ };
	if(request.coupon_name){
		var insertData = {};
		insertData.coupon_name = request.coupon_name;
		insertData.coupon_code = request.coupon_code;
		insertData.discount_type = request.discount_type;
		insertData.discount_amount = request.discount_amount;
		insertData.start_date = request.start_date;
		insertData.end_date = request.end_date;
		insertData.date = moment().format('YYYY-MM-DD HH:mm:ss');
		insertData.status = 0;
		
		coupon.insert(insertData, 'coupon', function(err, result){
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