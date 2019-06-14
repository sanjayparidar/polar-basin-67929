var express=require("express");
var router=express.Router();
var search=require("../model/common");

router.post("/",function(req,res){
    if(req.body.category!='' && req.body.searchproduct!=''){
     
    }else{
       if(req.body.category!=''){
        var query={category:req.body.category}
       }
       if(req.body.searchproduct){
           var query={name: "/"+req.body.searchproduct+"/"}
       }
    }
   search.findWhere(query,'product',function(err,result){
       res.send(result)
   });
});

module.exports=router;