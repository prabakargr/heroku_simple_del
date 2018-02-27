var express=require('express');

var mongoose=require('mongoose');

var bodyParser=require('body-parser');

var db=mongoose.connect("mongodb://project:tracking@ds229648.mlab.com:29648/project_tracking")

var usersRouting = require('./usersRouting');

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/get',usersRouting);


var port=process.env.PORT || 6000;

app.listen(port, () => console.log(`Running on localhost:6000`));
