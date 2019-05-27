var express=require('express');
var router=express.Router();

router.use('/loginWebService',require("./loginWebService"));
router.use('/signupWebService',require("./signupWebService"));
router.use('/otpStatus',require("./otpStatus"));

router.use('/adminLogin',require("./adminlogin"));

router.use('/addProduct',require("./addProduct"));
router.use('/productList',require("./productList"));
router.use('/getProductById',require("./getProductById"));

router.use('/addProductCategory',require("./addProductCategory"));
router.use('/productCategoryList',require("./productCategoryList"));

router.use('/',function(req, res){
	var data={ };
	data.message = 'you are not authenticate for this';
	data.status = 500;
	res.send(data);
});

module.exports=router;