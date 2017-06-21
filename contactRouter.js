'use strict';

const express = require('express');
const mongoClient = require('mongodb').MongoClient;
//const mongoose = require('mongoose');
const contactRouter = express.Router();
const uriDB = process.env.MONGODB_URI;
exports = module.exports = contactRouter;

contactRouter.get('',function(req,res){
	res.render('contact');
});

contactRouter.post('',function(req,res){
	let m = req.body;
	m.createDate = new Date();
	mongoClient.connect(uriDB,function(err,db){
		if(err){
			console.log('ERROR connecting to the database:'+err);
			return;
		}
		console.log('db connected');
		db.collection('message').insertOne(m,function(err,doc){
			if(err){
				console.log('ERROR inserting to db:'+err);
				res.end('error inserting');
				return ;
			}
			//res.json(doc);
			res.render('thanks');
		});
	});
});

/*
 * const messageSchema = new mongoose.Schema({
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
			newMessage.save(function(err,m){
				if(err){
					console.log('ERROR saving:'+err);
				}else{
					console.log('save successful:'+m);
				}
			});
		}
	});
	//console.log(m);
	res.json(m);
});
*/
