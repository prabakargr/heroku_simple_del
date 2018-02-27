var express=require('express');

var projectsController=require('./projectsController');

var projectsRouting=express.Router();

projectsRouting.route('/addproject').post(projectsController.addProject);
projectsRouting.route('/getprojects').get(projectsController.getProjects);
projectsRouting.route('/projectupdate').patch(projectsController.updateProject);

module.exports=projectsRouting;