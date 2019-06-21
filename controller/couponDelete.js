var express=require("express");
var router=express.Router();
var coupon=require('../model/common');
var mongo=require("mongodb");

router.post('/',function(req,res){
    coupon.deleteData({_id:mongo.ObjectId(req.body.id)},'coupon',function(err,result){
        var data={'response':"success"}
        res.send(data)
    });
});


module.exports=router;