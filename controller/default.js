var express=require('express');
var router=express.Router();

router.use('/loginWebService',require("./loginWebService"));
router.use('/signupWebService',require("./signupWebService"));
router.use('/adminLogin',require("./adminlogin"));
router.use('/otpStatus',require("./otpStatus"));
router.use('/addProductCategory',require("./addProductCategory"));
router.use('/addProduct',require("./addProduct"));
router.use('/productList',require("./productList"));
router.use('/productCategoryList',require("./productCategoryList"));

router.use('/',function(req, res){
	var data={ };
	data.message = 'you are not authenticate for this';
	data.status = 500;
	res.send(data);
});

module.exports=router;