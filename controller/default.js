var express=require('express');
var router=express.Router();

router.use('/loginWebService',require("./loginWebService"));
router.use('/signupWebService',require("./signupWebService"));
router.use('/otpStatus',require("./otpStatus"));
router.use('/resendOtp',require("./resendOtp"));
router.use('/forgotPassword',require("./forgotPassword"));
router.use('/updateUser',require("./updateUser"));

router.use('/adminLogin',require("./adminlogin"));

router.use('/addProduct',require("./addProduct"));
router.use('/productList',require("./productList"));
router.use('/getProductById',require("./getProductById"));
router.use('/updateProduct',require("./updateProduct"));
router.use('/deleteProduct',require("./deleteProduct"));

router.use('/addProductCategory',require("./addProductCategory"));
router.use('/productCategoryList',require("./productCategoryList"));
router.use('/getProducCategorytById',require("./getProducCategorytById"));
router.use('/updateProductCategory',require("./updateProductCategory"));

router.use('/addCoupon',require("./addCoupon"));
router.use('/couponList',require("./couponList"));
router.use('/getCouponById',require("./getCouponById"));
router.use('/updateCoupon',require("./updateCoupon"));

router.use('/addWishlist',require("./addWishlist"));
router.use('/wishlist',require("./wishlist"));
router.use('/deleteWishlist',require("./deleteWishlist"));

router.use('/contactus',require("./contactus"));

router.use('/customerservice',require('./customerservice'));

router.use('/aboutus',require('./aboutus'));

router.use('/search',require('./productseraach'));

router.use('/orderhistory',require('./orderhistory'));

router.use('/subcategory',require('./subcategory'));

router.use('/todaydeal',require('./todaydeal'));

router.use('/firmworks',require('./firmworks.js'));
router.use('/',function(req, res){
	var data={ };
	data.message = 'you are not authenticate for this';
	data.status = 500;
	res.send(data);
});

module.exports=router;