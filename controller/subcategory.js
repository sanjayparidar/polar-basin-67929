var express=require('express');
var router=express.Router();
var subcategory=require('../model/common');
var category=require('../model/common');
var mongo =require('mongodb');
router.post('/',function(req,res){
   subcategory.insert(req.body,'subcategory',function(err,result){
      var data={'response':"success"};
      res.send(data);
   });
});

router.get('/',function(req,res){
    subcategory.find('subcategory',function(err,result1){
        console.log(result1)
    category.find('product_category',function(err,result){
         console.log(result);
         for(let i=0;i<result.length;i++){
            for(let j=0;j<result1.length;j++){
               if(result[i]._id==result1[j].categoryid){
                   result1[j].category=result[i].category_name
               }
            }
         }
         res.send(result1)
    });
    });
});
router.post('/getsubcategoryById',function(req,res){
   subcategory.findWhere({_id:mongo.ObjectId(req.body.id)},'subcategory',function(err,result){
      res.send(result)
   });
});
module.exports=router;