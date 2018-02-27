var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var projectModel=new Schema({
    slno: String,
    appname: String,
    client: String,
    appstatus: String,
    payment: String,
    comment: String,
    date: String,
    timelimit:String,
    startdate: String,
    description:String
});

module.exports=mongoose.model("project",projectModel);