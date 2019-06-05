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
	if(request.product_name){
		var insertData = {};
		insertData.product_id = request.product_id;
		insertData.product_name = request.product_name;
		insertData.company_name = request.company_name;
		insertData.description = request.description;
		insertData.category = request.category;
		insertData.quantity = request.quantity;
		insertData.unit = request.unit;
		insertData.price = request.price;
		insertData.date = moment().format('YYYY-MM-DD HH:mm:ss');
        insertData.image = request.image;
		
		wishlist.insert(insertData, 'wishlist', function(err, result){
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