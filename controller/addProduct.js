var express=require("express");
var router=express.Router();
var product = require("../model/common");
const { check,validationResult } = require('express-validator/check');
var jwt=require("jsonwebtoken");
var Mongo=require("mongodb");
var moment = require('moment');
var path = require('path');

router.post("/",function(req, res){
	console.log(req.files);
	var request = req.body;
	console.log(request)
	var data={ };
	if(req.files){
		var insertData = {};
		insertData.product_name = request.product_name;
		insertData.company_name = request.company_name;
		insertData.description = request.description;
		insertData.category = request.category;
		insertData.quantity = request.quantity;
		insertData.unit = request.unit;
		insertData.stock_status = request.stock_status;
		insertData.price = request.price;
		insertData.date = moment().format('YYYY-MM-DD HH:mm:ss');
		insertData.status = 0;
		var file = req.files.image;
		// var newname = insertData.date+file.name;
		var newname = file.name;
		var filepath = path.resolve("/../images/"+newname);
        file.mv(filepath,function(err){
			if(err){
				console.log(err);
				return;
			}
	
		})
        insertData.image = newname;
		
		product.insert(insertData, 'product', function(err, result){
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