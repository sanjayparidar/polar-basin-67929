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
    console.log(query,"second")
   search.findWhere(query,'product',function(err,result){
       res.send(result)
   });
});

module.exports=router;