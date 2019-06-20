var express=require('express');
var router=express.Router();
var workers=require('../model/common');

router.post('/',function(req,res){
    console.log(req.body)
    if(req.body.type=='video'){
        workers.insert(req.body,'workers',function(err,result){
            var data={ };
            data.response='success';
            data.status=200;
            console.log('hello')
            res.send(data)     
         });

    }
    
});


router.get('/',function(req,res){
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