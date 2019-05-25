var express=require("express");
var router=express.Router();
var user = require("../model/common");
const { check,validationResult } = require('express-validator/check');
var jwt=require("jsonwebtoken");
var Mongo=require("mongodb");

router.post("/",function (req, res){
	var request = req.body;
	var data={ };
	if(request.mobile){
		if(request.password){
			user.findWhere({$or:[{mobile : request.mobile,password : request.password},{email : request.mobile,password : request.password}]}, 'user', function(err, result){
				if(err){
					data.message = 'Invalide Request';
					data.status = 300;
					res.send(data);
				}
				
				if(result.length){
					if(result[0].status){
						data.data = result[0];
						data.status = 200;
						res.send(data);
					}else{
						data.message = 'otp verification pending';
						data.otp = result[0].otp;
						data.status = 300;
						res.send(data);
					}
				}else{
					data.message = 'Invalide Request';
					data.status = 300;
					res.send(data);
				}
			});
		}else{
			data.message = 'Invalide Request';
			data.status = 300;
			res.send(data);
		}
	}else{
		data.message = 'Invalide Request';
		data.status = 300;
		res.send(data);
	}
});
		
module.exports=router;