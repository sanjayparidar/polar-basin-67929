var express=require("express");
var router=express.Router();
var wishlist = require("../model/common");
const { check,validationResult } = require('express-validator/check');
var jwt=require("jsonwebtoken");
var Mongo=require("mongodb");
var moment = require('moment');

router.post("/",function(req, res){
	var request = req.body;
	var data={ };
	wishlist.findWhere({user_id : request.user_id}, 'wishlist', function(err, result){
		if(err){
			data.message = 'Invalide Request';
			data.status = 300;
			res.send(data);
		}
		
		if(result.length){
			data.message = 'success';
			data.status = 200;
			data.details = result;
			res.send(data);
		}else{
			data.message = 'No record found';
			data.status = 300;
			res.send(data);
		}
	});
});
		
module.exports=router;