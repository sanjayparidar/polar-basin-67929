var express=require('express');
var router=express.Router();
var about=require('../model/common');
var Mongo=require('mongodb');
router.post('/',function(req,res){
         console.log(req.body)
       about.insert(req.body,"aboutus",function(err,result){
        //    console.log(result)
        res.send(result)
       })
});

router.get('/',function(req,res){
    about.find('aboutus',function(err,result){
        res.send(result)
    });
});

router.post('/delete',function(req,res){
    about.deleteData({_id:Mongo.ObjectID(req.body.id)},'aboutus',function(err,result){
        var data={"response":'success'}
        res.send(data)
    });
});


router.post('/edit',function(req,res){
    about.findWhere({_id:Mongo.ObjectID(req.body.id)},'aboutus',function(err,result){
        res.send(data)
    });
});

router.post('/update',function(req,res){
    about.updateWhere({_id:Mongo.ObjectID(req.body.id)},req.body,'aboutus',function(err,result){
        var data={response:"success"}
        res.send(data)
    });
});


module.exports=router;