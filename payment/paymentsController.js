var Payment=require('./paymentModel');

var addpayment=function(req,res){
    var client=req.body.client;
    var appname=req.body.appname;  
    Payment.findOne({client,appname},function(err,payment){
      // console.log(payment);
      // var paying=this.payment;
      if(err){
        res.status(404)
        res.send('not found')
    }else{
      // console.log(payment);
      // payment.paidamt=req.body.paidamt;
      payment.paidamt.push(req.body.paidamt);
      console.log(payment.paidamt)
      payment.save(function(err){
        if(!err){
          res.status(200);
          res.send(payment);
        }else{
          res.status(500);
          res.send('not found');
        }
      })
    } 
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
var getClients=function(req,res){
  Payment.find(function(err,clients){
    if(err){
      res.send('cannot add');
    }else{
      res.send(clients);
    }
  })
}
module.exports={
addpayment:addpayment,
addnewPayment:addnewPayment,
getClients:getClients
}

