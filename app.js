var express=require('express');

var mongoose=require('mongoose');

var path = require("path");

var bodyParser=require('body-parser');

var db=mongoose.connect("mongodb://project:tracking@ds229648.mlab.com:29648/project_tracking")

var usersRouting = require('./users/usersRouting');

var projectsRouting=require('./projects/projectsRouting');

var paymentsRouting=require('./payment/paymentsRouting');


var app=express();

process.env.PWD = process.cwd();

app.set('views', path.join(process.env.PWD, 'public'));

app.use('/public',express.static(path.join(process.env.PWD, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/users',usersRouting);
app.use('/projects',projectsRouting);
app.use('/payments',paymentsRouting);







var port=process.env.PORT || (3000);

app.listen(port, () => console.log(`Running on localhost:3000`));
