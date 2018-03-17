var express=require('express');

var projectsController=require('./projectsController');

var projectsRouting=express.Router();

projectsRouting.route('/addproject').post(projectsController.addProject);
projectsRouting.route('/getprojects').get(projectsController.getProjects);
projectsRouting.route('/projectupdate').post(projectsController.updateProject);
projectsRouting.route('/deleteproject').post(projectsController.deleteProject);

module.exports=projectsRouting;