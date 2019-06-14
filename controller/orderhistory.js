var express=require('express');
var router=express.Router();
var order=require('../model/common');

router.post('/',function(req,res){
    order.insert(req.body,'orderhistory',function(err,result){
        var obj={"response":"success"}
        res.send(obj)
    });
});
module.exports=router