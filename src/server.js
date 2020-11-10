var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var mongoose = require('mongoose');
var config = require('./config/config');
var port = process.env.PORT || 8080;
var cors = require('cors');
var multer = require('multer');
var session = require('express-session');
var UPLOAD_PATH = 'uploads';
var path = require('path');
var adminbro = require('./admin-bro');
var cookieParser = require('cookie-parser');
// app.use(cookieparser(config.cookieSecret));

mongoose.connect(config.db, { useNewUrlParser: true , useCreateIndex: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connection iko sawa!!');
});
connection.on('error', (err) => {
    console.log('MongoDB, no connection' +err);
    process.exit();
});
var storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, UPLOAD_PATH);
    },
    filename: function(req, file, callback){
      callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  var upload = multer({ storage: storage});
  module.exports = upload;
 

var app = express();


 app.use(express.static(UPLOAD_PATH));
 app.use('/app', express.static("public"));
 app.use(cookieParser( config.cookieSecret));
 app.use(session({secret: "akjjkjnisaiuu8998323jdkadsih892rhoisdfasl", resave: true,
 saveUninitialized: true,}));
 app.use(/^\/(?!admin).*/,bodyParser.urlencoded({ extended: false}));
 app.use(bodyParser.json());
 
 app.use(cors());
 app.use(function (req, res, next) {
     res.header('Access-Control-Allow-Origin', "*");
     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept, Authorization');
     next();
 })
 app.use(passport.initialize());
 var passportMiddleware = require('./middleware/passport');
 passport.use(passportMiddleware);

 app.get('/home', function(req, res) {
  res.setHeader('Content-Type', 'text/html');
     return res.send('Hello! The API is at http://localhost:'+ port + '/api');
 });

 var routes = require('./routes.js');
//  var request = require('./routes.js');
 app.use('/api', routes);
 app.use('/admin', adminbro);

 app.listen(port);
 console.log('Tuko http://localhost:'+port);
