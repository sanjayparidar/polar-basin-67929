var express=require("express");
var router=express.Router();
var search=require("../model/common");

router.post("/",function(req,res){
    if(req.body.category!='' && req.body.searchproduct!=''){
      var query={$and:[{category:req.body.category},{'product_name': {'$regex': req.body.searchproduct,'$options': 'i'}}]}
    }else{
       if(req.body.category!=''){
        var query={category:req.body.category}
       }
       if(req.body.searchproduct){
             var query= {'product_name': {'$regex': req.body.searchproduct,'$options': 'i'}}
      }
    }
    
   search.findWhere(query,'product',function(err,result){
       if(result.length>0){
        var data={ }
        data.message="success";
        data.status=200;
        data.details=result
        res.send(data)
       }else{
        var data={};
        data.message='empty';
        data.status=300;
        res.send(data)

       }
   });
});

module.exports=router;