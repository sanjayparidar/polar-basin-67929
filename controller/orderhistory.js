var express=require('express');
var router=express.Router();
var order=require('../model/common');

router.post('/',function(req,res){
    req.body.date = ("0"+new Date().getDate()).slice(-2)+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getFullYear()).slice(-4)+' '+("0"+new Date().getHours()).slice(-2)+':'+("0"+new Date().getMinutes()).slice(-2);
    // order.insert(req.body,'orderhistory',function(err,result){
    //     var obj={"response":"success"}
    //     res.send(obj)
    // });
    res.send(req.body.date)
});
module.exports=router