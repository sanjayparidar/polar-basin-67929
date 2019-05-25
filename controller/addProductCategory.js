var express=require("express");
var router=express.Router();
var product = require("../model/common");
const { check,validationResult } = require('express-validator/check');
var jwt=require("jsonwebtoken");
var Mongo=require("mongodb");
var moment = require('moment');

router.post("/",function (req, res){
	var request = req.body;
	var data={ };
	if(request.category_name){
		var insertData = {};
		insertData.category_name = request.category_name;
		insertData.date = moment().format('YYYY-MM-DD HH:mm:ss');
		insertData.status = 0;
		
		product.insert(insertData, 'product_category', function(err, result){
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