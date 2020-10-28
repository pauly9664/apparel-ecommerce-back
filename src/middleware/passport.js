var User = require('../models/user');
var Sales = require('../models/sales');
var InternalUser = require('../models/internal_user');
var Cart = require('../models/cart');
var Contact = require('../models/contact');
var Items = require('../models/items');
var JwtStrategy = require('passport-jwt').Strategy;
     ExtractJwt = require('passport-jwt').ExtractJwt;
var config = require('../config/config');

var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
}
module.exports = new JwtStrategy(opts, function (jwt_payload, done){

    User.findById(jwt_payload.id, function (err, user) {
        if(err) {
            return done(err, false);
        }
        if(user){
            // console.log(jwt_payload.id);
            return done(null, user);
        }else {
            return done(null, false);
        }
    });
    InternalUser.findById(jwt_payload.id, function (err, user) {
        if(err) {
            return done(err, false);
        }
        if(user){
            // console.log(jwt_payload.id);
            return done(null, user);
        }else {
            return done(null, false);
        }
    });
    Contact.findById(function (err, contact) {
        if(err) {
            return done(err, false);
        }
        if(contact){
            
            return done(null, contact);
        }else {
            return done(null, false);
        }
    });
    Items.findById(function (err, item) {
        if(err) {
            return done(err, false);
        }
        if(item){
            
            return done(null, item);
        }else {
            return done(null, false);
        }
    });
    Sales.findById( function (err, sale) {
        if(err) {
            return done(err, false);
        }
        if(sale){
            
            return done(null, sale);
        }else {
            return done(null, false);
        }
    });
    Cart.findById( function (err, cart) {
        if(err) {
            return done(err, false);
        }
        if(cart){
            
            return done(null, sale);
        }else {
            return done(null, false);
        }
    });
})