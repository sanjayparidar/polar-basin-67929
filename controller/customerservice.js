var express=require("express");
var router=express.Router();
var admin = require("../model/common");
var nodemailer = require('nodemailer');
var mongo=require('mongodb');


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
     console.log(req.body)
     admin.findWhere({_id:mongo.ObjectId(req.body.id)},'user',function(err,result){
         
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user:'sanjaypatidar2731@gmail.com',
              pass: 'Sanjay@patidar95'
            }
          });
          console.log(result[0].email,"++++++++++++SSSSSSSSSSSSSSSSSSSSSSSSSS")
          var mailOptions = {
            from: 'sanjaypatidar2731@gmail.com',
            to: result[0].email,
            subject: req.body.title,
            text: req.body.note
          };
          
          
          transporter.sendMail(mailOptions, function(error, info){
              var obj={ }
            if (error) {
                obj.eroror=error
              obj.response="failed"
            } else {
                
              obj.response="success"
            }
            res.send(obj)
          });
         


     });
     
})






module.exports=router;

