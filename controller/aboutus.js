var express=require('express');
var router=express.Router();
var about=require('../model/common');
var Mongo=require('mongodb');
router.post('/',function(req,res){

       about.updateWhere({_id:Mongo.ObjectId(req.body.id)},req.body,"aboutus",function(err,result){
        res.send(result)
       })
});

module.exports=router;