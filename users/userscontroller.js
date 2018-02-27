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

// update profile

var updateProfile=function(req,res){
    var email=req.body.email;
    var username=req.body.username;
    var firstname=req.body.firstname;
    var lastname=req.body.lastname;
    var address=req.body.address;
    var city=req.body.city;
    var postalcode=req.body.postalcode;
    var company=req.body.company;
    var aboutme=req.body.aboutme;
    User.findOneAndUpdate(
        {email,username},
        {
            firstname,
            lastname,
            address,
            city,
            postalcode,
            company,
            aboutme
        },
        function(err,user){
            
        if(err){
            res.status(404).send('connot update');
        }else{
            res.status(200).send(user);
        }
        }
       )
}


module.exports={
    getusers:getusers,
    adduser:adduser,
    updateProfile:updateProfile,
}