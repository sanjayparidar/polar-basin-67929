var express=require('express');
var router=express.Router();
var category=require('../model/common');
var subcategory=require('../model/common');

router.get('/',function(req,res){
    category.find('product_category',function(err,result){
    subcategory.find('subcategory',function(err,result1){
        if(result.length>0){
        for(i=0;i<result.length;i++){
            result[i].subcategory=[]
            for(j=0;j<result1.length;j++){
                if(result[i]._id==result1[j].categoryid){
                   result[i].subcategory.push(result1[j])
                }
            }
        }
        var data={ };
        data.status=200;
        data.data=result;
        res.send(data)
    }else{
           var data={ };
           data.status=300;
           data.response='empty'
           res.send(data)
    }
    });
});
});
module.exports=router;