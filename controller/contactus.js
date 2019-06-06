var express =require('express');
var router=express.Router();
var admin = require("../model/common");

router.post('/find',function(req,res){
    var data={ }
admin.findWhere({_id : Mongo.ObjectId(req.body.id)},'contactus',function(err,result){
    data.data = result;
    data.status = 200;
	res.send(data);
  });
});

router.post('update',function(req,res){
    var data={ }
    admin.updateWhere({_id : Mongo.ObjectId(req.body.id)},req.body,'contactus',function(err,result){
        data.status=200
        res.send(data);
    });
});

router.get('/',function(req,res){
    var data={ };
    admin.findWhere({status:'0'},'contactus',function(err,result){
        console.log("+++++++++++hello++++++++++")
        console.log(result)
        data.status=200
       data.data=result;
       res.send(data);
    });
});

module.exports=router;