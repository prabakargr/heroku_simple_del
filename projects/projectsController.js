var Project=require('./projectModel');

var Payment=require('../payment/paymentModel')

// add new project

var addProject=function(req,res){
    var new_project=new Project(req.body);
    new_project.save(function(err){
        if(err){
            res.send('error');
        }else{
           var payment=new Payment(req.body);
           payment.save(function(err){
               if(err){
                   res.send('error');
               }else{
                   res.send(payment);
               }
           }) 
        }
    });
};

// projects and details get

var getProjects=function(req,res){
    Project.find(function(err,projects){
        if(err){
            res.status(500);
            res.send('sever err')
        }else{
           res.status(200);
           res.send(projects)
        }
    });
};

//project update

var updateProject=function(req,res){
    var appname=req.body.appname;
    var client=req.body.client;
    var appstatus=req.body.appstatus;
    var comment=req.body.comment;
    var date=req.body.date;
    Project.findOneAndUpdate({appname,client},
        {date,appstatus,comment},
        function(err,project){
            if(err){
              res.status(404).send('connot update')  
            }else{
                res.status(200).send(project)
            }
    })
}
module.exports={
    addProject:addProject,
    getProjects:getProjects,
    updateProject:updateProject
}