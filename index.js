var express = require('express');
var bodyParser = require('body-parser');
var contactRouter = require('./contactRouter');
var listMessages = require('./listMessage');

var app = express();

app.set('views',__dirname+'/views');
app.set('view engine','pug');
app.set('port',(process.env.PORT || 8080)); 

app.use(express.static(__dirname+'/public'));//set the public dir for js and stylesheet

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/portfolio',function(req,res){
	res.render('portfolio');
});
app.get('/skills',function(req,res){
	res.render('skills');
});
app.get('/aboutme',function(req,res){
	res.render('aboutme');
});
app.get('/secret_door',listMessages);

app.use('/contact',contactRouter);
app.use(function(req,res){
	res.render('index');
});

app.listen(app.get('port'),function(){
	console.log('The server is running now.');
	console.log(process.env.MONGODB_URI);
});
