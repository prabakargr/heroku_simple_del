var Project=require('./projectModel');

// add new project

var addProject=function(req,res){
    var new_project=new Project(req.body);
    new_project.save(function(err){
        if(err){
            res.send('error');
        }else{
            res.send(new_project);
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
module.exports={
    addProject:addProject,
    getProjects:getProjects,
}