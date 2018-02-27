var express=require('express');

var mongoose=require('mongoose');

var bodyParser=require('body-parser');

var db=mongoose.connect("mongodb://student:students@ds249418.mlab.com:49418/students")

var usersRouting = require('./usersRouting');

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/get',usersRouting);


var port=process.env.PORT || 6000;

app.listen(port, () => console.log(`Running on localhost:6000`));
