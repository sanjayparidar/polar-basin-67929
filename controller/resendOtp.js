var express=require("express");
var router=express.Router();
var user = require("../model/common");
const { check,validationResult } = require('express-validator/check');
var jwt=require("jsonwebtoken");
var Mongo=require("mongodb");
var requestCurl = require('request');

router.post("/",function (req, res){
	var request = req.body;
	var data={ };
	if(request.mobile){
		user.findWhere({$or:[{mobile : request.mobile},{email : request.mobile}]}, 'user', function(err, result){
			if(err){
				data.message = 'Invalide Request';
				data.status = 300;
				res.send(data);
			}
			
			if(result.length){
				
				var msge = "Your one time password is : "+result[0].otp;
				var options = {
					url: 'http://sms.pnpuniverse.com/api/v4/?api_key=Ae08d6b71079725f135ba5375c69d0abd&method=sms&message='+msge+'&to='+result[0].mobile+'&sender=RICWAL',
					method: 'POST',
					headers: {
						'Content-Type': 'x-ww-form-urlencoded'
					}
				};
				requestCurl(options, function(resreq, resres){});
				
					data.data = result[0];
					data.status = 200;
					res.send(data);
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
});
		
module.exports=router;