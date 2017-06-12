var express = require('express');

var app = express();
app.set('views',__dirname+'/views');
app.set('view engine','pug');
app.set('port',(process.env.PORT || 8080)); 

app.use(express.static(__dirname+'/public'));

	app.use(function(req,res){
		res.render('index');
	});

app.listen(app.get('port'),function(){
	console.log('The server is running now.');
});
