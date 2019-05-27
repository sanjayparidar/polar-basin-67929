var express=require("express");
var router=express.Router();
var product = require("../model/common");
const { check,validationResult } = require('express-validator/check');
var jwt=require("jsonwebtoken");
var Mongo=require("mongodb");

router.post("/",function (req, res){
	var data={ };

		product.findWhere('{status : 0}', 'product_category', function(err, result){
			if(err){
				data.message = 'Invalide Request';
				data.status = 300;
				res.send(data);
			}
			
			data.data = result;
			data.status = 200;
			res.send(data);
		});
});
		
module.exports=router;