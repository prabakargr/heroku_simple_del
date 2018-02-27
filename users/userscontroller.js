var User=require('./userModel');

//add user
var adduser=function (req,res) {
    var user=new User(req.body);
    user.save(function (err) {
        if(err){
            res.send('cannot reqister')
        }else{
            res.send(user)
        }
    });
};

//get users
var getusers=function(req,res){
    User.find(function(err,users){
        console.log(users)
        res.send(users);
    })
}

module.exports={
    getusers:getusers,
    adduser:adduser,
}