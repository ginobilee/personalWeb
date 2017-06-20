const express = require('express');
const contactRouter = express.Router();
exports = module.exports = contactRouter;

contactRouter.get('',function(req,res){
	res.render('contact');
});

contactRouter.post('',function(req,res){
	let m = req.body;
	console.log(m);
	res.json(m);
});
