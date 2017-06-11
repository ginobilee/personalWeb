var express = require('express');

var app = express();
app.set('views',__dirname+'/views');
app.set('view engine','pug');
app.set('port',(process.env.PORT || 80)); 

	app.use(function(req,res){
		res.render('index');
	});

app.listen(app.get('port'),function(){
	console.log('The server is running now.');
});