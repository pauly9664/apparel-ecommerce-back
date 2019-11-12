var express = require('express');
routes = express.Router();
const Contact = require('./models/contact');
const Sales = require('./models/sales');
var userController = require('./controller/user-controller');
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
     try{
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
}catch(ex){
    console.log(ex);
}
})

//routes.post('/postItems', itemsController.postItems);
routes.post('/postItems', itemsController.postItems);

routes.get('/special', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({ msg: `${req.user.names}, ${req.user.number}`, id : `${req.user._id}` });
})

module.exports = routes;