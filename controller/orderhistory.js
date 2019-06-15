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

router.get('/',function(req,res){
    order.find("orderhistory",function(err,result){
        res.send(result)
    });
});


router.post('/findorder',function(req,res){
    order.findWhere({userid:req.body.userid},"orderhistory",function(err,result){
        var data={ }
        data.message="success";
        data.status=200;
        data.details=result
        res.send(data)
    });
});


router.post('/todayorder',function(req,res){
    var date=moment().format('YYYY-MM-DD');
    var query={$and:[{userid:req.body.userid},{'date': {'$regex':date,'$options': 'i'}}]}
    order.findWhere(query,'orderhistory',function(err,result){
        res.send(result)
    });
});


module.exports=router