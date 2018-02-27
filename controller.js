var Student=require('./studentModel');
var get=function(req,res){
    Student.find(function(err,students){
        console.log(students)
        res.send(students);
    })
}

module.exports.get=get;