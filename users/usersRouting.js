var express=require('express');

var usersController=require('./userscontroller');

var usersRouting=express.Router();

usersRouting.route('/getusers').get(usersController.getusers);
usersRouting.route('/adduser').post(usersController.adduser);
usersRouting.route('/updateprofile').patch(usersController.updateProfile);


module.exports=usersRouting;