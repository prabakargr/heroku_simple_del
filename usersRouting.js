var express=require('express');

var usersController=require('./userscontroller');

var usersRouting=express.Router();

usersRouting.route('/get').get(usersController.get);


module.exports=usersRouting;