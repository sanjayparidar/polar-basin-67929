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
		user.findWhere({$or:[{mobile : request.mobile},{email : request.mobile}]}, 'user', function(err, result){
			if(err){
				data.message = 'Invalide Request';
				data.status = 300;
				res.send(data);
			}
			
			if(result.length){
					var mobile = result[0].mobile;
					var password = result[0].password;
					console.log(mobile+ " - " +password);
					data.status = 200;
					data.message = 'success';
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