var express=require("express");
var router=express.Router();
var admin = require("../model/common");
var nodemailer = require('nodemailer');


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
     var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sanjaypatidar2731@gmail.com',
          pass: 'Sanjay@patidar95'
        }
      });
      var mailOptions = {
        from: 'sanjaypatidar2731@gmail.com',
        to: 'akashverma2792@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    
})






module.exports=router;

