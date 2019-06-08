var express=require("express");
var router=express.Router();
var admin = require("../model/common");

router.post('/',function(req,res){
    var data={ };
    admin.insert(req.body,'customerservice',function(err,result){
        data.status=200;
       data.data=result[0].ops;
       res.send(data)
       
    });
});

module.exports=router;