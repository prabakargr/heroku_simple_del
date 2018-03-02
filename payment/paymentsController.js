var Payment=require('./paymentModel');

var addpayment=function(req,res){
    var client=req.body.client;
    var appname=req.body.appname;  
    Payment.find({client,appname},function(err,payment){
      // console.log(payment);
      //payment.paidamt.push(req.body.paidamt);
      console.log(payment);
      payment.save(function(err,uppay){
        if(err){
          res.send('connot');
        }else{
          res.send(uppay);
        }
      })
      
    })
}
var addnewPayment=function(req,res){
  var payment=new Payment(req.body);
  console.log(payment);
  payment.save(function(err,newpayment){
if(err){
  res.send('cannot add');
}else{
  res.send(newpayment);
}
  })
}
module.exports={
addpayment:addpayment,
addnewPayment:addnewPayment
}