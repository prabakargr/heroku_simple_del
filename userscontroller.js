var Student=require('./userModel');
var get=function(req,res){
    Student.find(function(err,students){
        console.log(students)
        res.send(students);
    })
}

module.exports.get=get;