var Payment=require('./paymentModel');


var addpayment=function(req,res){
    var client=req.body.client;
    var appname=req.body.appname;
    var addpayment=req.body.addpayment;
    var date=req.body.date;
   
    Payment.find({client,appname},function(err,payment){
      
        console.log(payment);
        if(err){
            res.send('cAnnot')
        }else{
            console.log(addpayment);
            payment.save(addpayment,function(err,adpayment){
                 console.log(adpayment);
                 if(err){
                     res.send('no adpayment');
                 }else{
                     res.send(adpayment);
                 }
             })
        }
    })
}
module.exports={
addpayment:addpayment,
}