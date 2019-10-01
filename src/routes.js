var express = require('express');
routes = express.Router();
var userController = require('./controller/user-controller');
var contactController = require('./controller/contact-controller');
var passport = require('passport');

routes.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.send('Hello stupid man!');
});

routes.post('/register', userController.registerUser);
routes.post('/login', userController.loginUser);
routes.post('/contact', contactController.saveFeedback);

routes.get('/special', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({ msg: `Hi ${req.user.names}! Your Number is ${req.user.number}` });
})

module.exports = routes;