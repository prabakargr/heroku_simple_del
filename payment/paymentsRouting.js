var express=require('express');

var paymentsController=require('./paymentsController');

var paymentsRounting=express.Router();

paymentsRounting.route('/addpayment').post(paymentsController.addpayment);

module.exports=paymentsRounting;