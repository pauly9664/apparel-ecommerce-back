var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient

const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'At-Texts';



//Establish Connection
MongoClient.connect(url, function (err, client) {
	assert.equal(null, err);
	console.log("connected!!!");

	const db = client.db(dbname);

	client.close();
 
});
 app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept, Authorization');
	next();
})

app.use(bodyParser.json())
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/post-trial.html'));
});

app.post('/', function(req, res) {
   // Insert JSON straight into MongoDB
  db.collection('Atalking').insert(req.body, function (err, result) {
      if (err)
		 res.send('Error');
      else
		 res.send('Success');
  });
});