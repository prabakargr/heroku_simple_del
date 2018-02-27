var express=require('express');

var controller=require('./controller');

var router=express.Router();

router.route('/get').get(controller.get);


module.exports=router;