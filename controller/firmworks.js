var express=require('express');
var router=express.Router();
var workers=require('../model/common');
var path = require('path');

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
    else{
        var file = req.files.makeproduct;
        var newname = file.name;
        var filepath = path.resolve("images/"+newname);
        file.mv(filepath,function(err){
			if(err){
				console.log(err)
			}
        });
        req.body.makeproduct=newname
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