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


module.exports=router;