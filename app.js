var express=require('express');

var bodyParser=require('body-parser');

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/get',function(err,res){
    res.send('got')
})


var port=process.env.PORT || 6000;

app.listen(port, () => console.log(`Running on localhost:6000`));
