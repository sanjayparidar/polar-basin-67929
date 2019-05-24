var express=require("express");
var router=express.Router();
var admin = require("../model/common");
const { check,validationResult } = require('express-validator/check');
var jwt=require("jsonwebtoken");
var Mongo=require("mongodb");

router.post("/", function(req, res) {
	var request = req.body;
	var data={ };
	if(request.email){
		if(request.password){
			admin.findWhere({email : request.email,password : request.password}, 'admin', function(err, result){
				if(err){
					data.message = 'Invalide Request';
					data.status = 400;
					res.send(data);
				}
				
				if(result.length){
					data.data = result;
					data.status = 200;
					res.send(data);
				}else{
					data.message = 'Invalide Request';
					data.status = 500;
					res.send(data);
				}
			});
		}else{
			data.message = 'Invalide Request';
			data.status = 100;
			res.send(data);
		}
	}else{
		data.message = 'Invalide Request';
		data.status = 300;
		res.send(data);
	}
});
module.exports=router;