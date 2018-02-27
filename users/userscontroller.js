var User=require('./userModel');
var getusers=function(req,res){
    User.find(function(err,users){
        console.log(users)
        res.send(users);
    })
}

module.exports.getusers=getusers;