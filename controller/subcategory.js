var express=require('express');
var router=express.Router();
var subcategory=require('../model/common');

router.post('/',function(req,res){
   subcategory.insert(req.body,'subcategory',function(err,result){
      var data={'response':"success"};
      res.send(data);
   });
});

router.get('/',function(req,res){
    subcategory.findaggregate('subcategory',function(err,result){
        res.send(result)
    });
});

module.exports=router;