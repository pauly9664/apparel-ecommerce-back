var Images = require('../models/images');
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var config = require('../config/config');
var UPLOAD_PATH = 'uploads';
var filesyst = require('fs');
//  var UPLOAD_PATH = require('./server');
// var upload = require('./server');
var path = require('path');
var multer = require('multer');
function createToken(posts) {
    return jwt.sign({ id: posts.id }, 
        config.jwtSecret)
}
var storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, UPLOAD_PATH);
    },
    filename: function(req, file, callback){
      callback(null, file.fieldname + '-' + Date.now());
    }
  });
  var upload = multer({ storage: storage});
exports.savePost = (req, res) => {
    upload.single('image');
    let newPost = new Images(req.file);
     newPost.filename = req.file.filename;
     newPost.price= req.body.price;
     newPost.description = req.body.description;

    newPost.save((err, posts) =>{
        if(err){
            return res.status(400);
        }
            return res.status(201).json(posts);
    });
}