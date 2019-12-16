var express = require('express');
routes = express.Router();
const Contact = require('./models/contact');
const Sales = require('./models/sales');
const Image = require('./models/images');
var UPLOAD_PATH = require('./server');
var upload = require('./server');
var path = require('path');
var filesyst = require('fs');
var del = require('del');
var userController = require('./controller/user-controller');
var imagesController = require('./controller/images-controller')
var contactController = require('./controller/contact-controller');
var itemsController = require('./controller/items-controller');
var salesController = require('./controller/sales-controller');
var passport = require('passport');

routes.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.send('Hello stupid man!');
});

routes.post('/register', userController.registerUser);
routes.post('/login', userController.loginUser);
routes.post('/contact', contactController.saveFeedback);
routes.post('/images', upload.single('image'), imagesController.savePost, (req, res, next) =>{
    let newPost = new Image();
       newPost.filename = req.file.filename;
       newPost.save((err, posts) =>{
        if(err){
            return res.status(400);
        }
        console.log(newPost);
            return res.status(201).json(posts);
    });
    }); 
routes.get('/images', (req, res, next)=>{
    Image.find({}, '-_v').lean().exec((err, images)=>{
        if(err){
            return res.status(400);
        }
            for(let i = 0; i < images.length; i++){
                var img = images[i];
                img.url = req.protocol + '://' +req.get('host')  + img.filename;
        }
        res.json(images);
    });
});
routes.get('/images/:id', (req, res, next) =>{
    let imgId = req.params.id;
    Image.findById(imgId, (err, image)=>{
        if(err){
            return res.status(400);
        }
             res.setHeader('Content-Type', 'image/jpeg');
            filesyst.createReadStream(path.join(UPLOAD_PATH, image.filename)).pipe(res);
        
    });
});
routes.delete('images/:id', (req, res, next) =>{

})
routes.post('/postSales', salesController.saveSale);

routes.get('/getItems', function(req, res) {
    console.log('Get request for all contacts');
    Contact.find({})
    .exec(function(err, contact){
        if(err){
            console.log("Error getting responses from clients");
        }else{
            res.json({item: contact});
        }
    })
})
routes.get('/getPastActivities',passport.authenticate('jwt', {session: false}),
 function(req, res){
    //  try{
    console.log('Log previous sales');
    userLogged = `${req.user._id}`,
    Sales.find()
    .where('user_id').equals(userLogged)
    .exec(function(err, sale){
        if(err){
            console.log(err);
         }else{
            return res.json({accounts: sale});
          }
    })
// }catch(ex){
//     console.log(ex);
// }
})

//routes.post('/postItems', itemsController.postItems);
routes.post('/postItems', itemsController.postItems);

routes.get('/special', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({ name: `${req.user.names}`, number: `${req.user.number}`, email: `${req.user.email}`, id : `${req.user._id}` });
})

module.exports = routes;