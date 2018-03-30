var User=require('./userModel');

var express     = require('express');

var app         = express();

var jwt    = require('jsonwebtoken');

var config = require('../config');

app.set('superSecret', config.secret);

app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


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
    var country=req.body.country
    User.findOneAndUpdate(
        {email,username},
        {
            firstname,
            lastname,
            address,
            city,
            postalcode,
            company,
            aboutme,
            country
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


// forgot password

var forgotpwd=function(req,res){
    var email={
        email:req.body.email
    }
    console.log(email)
    User.find(email,function (err,user) {

        if(err){

            res.send('err')
        }else {
            res.send(user);
            console.log(user);
        }
    });
};
// find profile for login

// var login=function(req,res){
//     var login_id={
//         email:req.body.email,
//         password:req.body.password
//     }
//     console.log(login_id)
//     User.find(login_id,function (err,user) {

//         if(err){
//             res.send('err')
//         }else {
//             res.send(user);
//             console.log(user);
//         }
//     });
// };

// change password (patch) method

var changepwd = function(req, res){
    var email = req.body.email;
    var confirmPassword = req.body.confirmPassword;
    var currentpass=req.body.currentpass;
    User.findOne({email},function(err, user){
        if(err){
            res.status(404).send('No user found')
        }else{
            if(user.password==currentpass){
                user.password=confirmPassword;
                user.save(function(err,user){
                    if(err){
                        res.send('Update failed')
                    }else{
                        res.send(user)
                    }
                })
            }else{
                res.send('current password is wrongs')
            }
        }
    })
  }

  var login=function(req,res){
      

    // find the user
    User.findOne({
        email: req.body.email
      }, function(err, user) {
    
        if (err) throw err;
    
        if (!user) {
          res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
    
          // check if password matches
          if (user.password != req.body.password) {
            res.json({ success: false, message: 'Authentication failed. Wrong password.' });
          } else {
    
            // if user is found and password is right
            // create a token with only our given payload
        // we don't want to pass in the entire user since that has the password
        const payload = {
          role: user.role 
        };
        console.log(payload);
            var token = jwt.sign(payload, app.get('superSecret'),{
            //   expiresInMinutes: 1440 // expires in 24 hours
           
            });
            console.log(token);
            // return the information including token as JSON
            res.json({
              success: true,
              message: 'Enjoy your token!',
              token: token
            }).status(200);
          }   
    
        }
    
      });
  }



module.exports={
    getusers:getusers,
    adduser:adduser,
    updateProfile:updateProfile,
    forgotpwd:forgotpwd,
    login:login,
    changepwd:changepwd
}