var express=require("express");
var router=express.Router();
var coupon = require("../model/common");
const { check,validationResult } = require('express-validator/check');
var jwt=require("jsonwebtoken");
var Mongo=require("mongodb");

router.post("/",function (req, res){
	var request = req.body;
	var data={ };
	if(request.page){
		var page = request.page;
		
		var options = {
			"sort": [['date','desc']],
			"limit": 10,
			"skip": (page - 1) * 10
		}

		coupon.findAllByLimit(options, 'coupon', function(err, result){
			if(err){
				data.message = 'Invalide Request';
				data.status = 300;
				res.send(data);
			}
			
			data.data = result;
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