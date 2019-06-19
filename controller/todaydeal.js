var express=require('express');
var router=express.Router();
var today =require('../model/common');
var category =require('../model/common');
var subcategory =require('../model/common');
router.post('/',function(req,res){
   today.insert(req.body,'todaydeal',function(err,result){
       var data={'response':'success'}
       res.send(data)
   });
});

router.post('/find',function(req,res){
    var options = {
        "sort": [['date','desc']],
        "limit": 10,
        "skip": (req.body.page - 1) * 10
    }
    today.findAllByLimit(options,'todaydeal', function(err, result){
     
     category.find('product_category',function(err,result1){
      
     
    
     subcategory.find('subcategory',function(err,result2){
        for(let i=0;i<result.length;i++){
            for(let j=0;j<result1.length;j++){
               if(result[i].categoryid==result1[j]._id){
                   result[i].category=result1[j].category_name
               }
            }
            for(let j=0;j<result2.length;j++){
                if(result[i].subcategoryid==result2[j]._id){
                    result[i].subcategory=result2[j].subcategory
                }
             }
         }
         
        if(result.length>0){
            var data={ }
            data.data = result;
			data.status = 200;
			res.send(data);
        }else{
            var data={ }
             data.status=300;
             data.response=empty;
             res.send(data)
        }
     });

    });



    })
})
module.exports=router;