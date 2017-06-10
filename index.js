var express = require('express'),
    ejs = require('ejs');

var app = express();
app.set('port',(process.env.PORT || 80)); 

	app.use(function(req,res){
		res.end('hello');
	});

app.listen(app.get('port'),function(){
	console.log('The server is running now.');
});
