var express=require("express");
var router=express.Router();
var admin = require("../model/common");

router.post('/',function(req,res){
    var data={ };
    admin.insert(req.body,'customerservice',function(err,result){
        data.status=200;
       data.data="success"
       res.send(data)
       
    });
});

router.get('/',function(req,res){
    admin.find('customerservice',function(err,result){
        res.send(result)
    });
});


router.post('/send_query_result',function(req,res){

    
})






module.exports=router;

