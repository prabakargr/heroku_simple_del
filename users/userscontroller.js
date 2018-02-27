var Student=require('./userModel');
var getusers=function(req,res){
    Student.find(function(err,students){
        console.log(students)
        res.send(students);
    })
}

module.exports.getusers=getusers;