var express=require("express");
var router=express.Router();
var user = require("../model/common");
const Nexmo = require('nexmo');
var jwt=require("jsonwebtoken");
const { check,validationResult } = require('express-validator/check');
var moment = require('moment');

router.post("/",function (req, res){
	var request = req.body;
	var data={ };
	if(request.mobile){
		if(request.email){
			user.findWhere({$or:[{mobile : request.mobile},{email : request.email}]}, 'user', function(err, result){
				if(err){
					data.message = 'Invalide Request';
					data.status = 300;
					res.send(data);
				}
				
				if(result.length){
					data.message = 'Duplicate record';
					data.status = 300;
					res.send(data);
				}else{
					var insertData = {};
					insertData.name = request.name;
					insertData.email = request.email;
					insertData.mobile = request.mobile;
					insertData.imei = request.imei;
					insertData.device_id = request.device_id;
					insertData.password = request.password;
					insertData.date = moment().format('YYYY-MM-DD HH:mm:ss');
					insertData.otp = Math.floor(Math.random() * 1000000, 9999999);
					insertData.status = 0;
					
					user.insert(insertData, 'user', function(err, result){
						if(err){
							data.message = 'Invalide Request';
							data.status = 300;
							res.send(data);
						}
						
						data.message = 'success';
						data.status = 200;
						data.otp = insertData.otp;
						res.send(data);
					});
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