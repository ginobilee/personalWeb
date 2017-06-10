var express = require('express'),
    ejs = require('ejs');

var app = express();

	app.use(function(req,res){
		res.end('hello');
	});

app.listen(process.env.port || 80,function(){
	console.log('The server is running now.');
});
