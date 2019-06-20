var express=require('express');
var router=express.Router();
var workers=require('../model/common');

router.post('/',function(req,res){
    workers.insert(req.body,'workers',function(err,res){
       var data={'response':"success"}
       res.send(data)     
    });
});


router.get('/',function(err,result){
    workers.find('workers',function(err,result){
        var data={ }
      if(result.length>0){
        data.response="success";
        data.status=200;
        data.data=result;
       res.send(data);

      }else{
          data.response="empty"
          data.status=300;
          res.send(data)
      }
    });
});

module.exports=router;