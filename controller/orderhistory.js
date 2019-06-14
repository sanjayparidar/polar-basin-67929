var express=require('express');
var router=express.Router();
var order=require('../model/common');
var moment=require('moment')
router.post('/',function(req,res){
    req.body.date =moment().format('YYYY-MM-DD HH:mm:ss');
    order.insert(req.body,'orderhistory',function(err,result){
        var obj={"response":"success"}
        res.send(obj)
    });
    
});
module.exports=router