var express=require('express');
var router=express.Router();
var subcategory=require('../model/common');
var category=require('../model/common');
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
                   result[j].category=result[i].category_name
               }
            }
         }
         res.send(result)
    });
    });
});

module.exports=router;