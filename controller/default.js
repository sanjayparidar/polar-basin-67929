var express=require('express');
var router=express.Router();

router.use('/',require("./loginWebService"));
router.use('/signupWebService',require("./signupWebService"));
router.use('/adminLogin',require("./adminlogin"));

module.exports=router;