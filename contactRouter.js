'use strict';

const express = require('express');
const mongoose = require('mongoose');
const contactRouter = express.Router();
const uriDB = process.env.MONGODB_URI;
exports = module.exports = contactRouter;

contactRouter.get('',function(req,res){
	res.render('contact');
});

contactRouter.post('',function(req,res){
	let m = req.body;
	let newMessage = new userMessage(m);
	mongoose.connect(uriDB,process.env.mongodb_uri,function(err,res){
		if(err){
			console.log('ERROR connecting to:'+uriDB);
		}else{
			console.log('connected');
			newMessage.save(function(err){
				if(err){
					console.log('ERROR saving:'+err);
				}
			});
		}
	});
	//console.log(m);
	res.json(m);
});

const messageSchema = new mongoose.Schema({
	user_name:{
		type:String
	},
	user_email:{
		type:String
	},
	user_message:{
		type:String
	}
});
const userMessage = mongoose.model('userMessage',messageSchema);
