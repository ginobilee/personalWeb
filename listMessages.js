'use strict';

const express = require('express'),
	mongoClient = require('mongodb').MongoClient;
const uriDB = process.env.MONGODB_URI;

const listMessages = express.Router();

exports = module.exports = listMessages;

listMessages.get('',function(req,res){
	mongoClient.connect(uriDB,function(err,db){
		if(err){
			console.log('ERROR connecting to db:'+err);
			return;
		}
		db.collection('message').find({}).toArray(function(err,docs){
			if(err){
				console.log('ERROR getting documents from db:'+err);
				return;
			}
			res.json(docs);
		});
	});
});
