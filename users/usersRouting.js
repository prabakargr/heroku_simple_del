var express=require('express');

var usersController=require('./usersController');

var usersRouting=express.Router();

usersRouting.route('/getusers').get(usersController.getusers);


module.exports=usersRouting;