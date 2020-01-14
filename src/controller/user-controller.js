var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config/config');

function createToken(user) {
    return jwt.sign({ id: user.id, email: user.email }, 
        config.jwtSecret, {
        expiresIn: 2000
    })
}
// exports.registerUser = (req, res) => {
//     if(!req.body.email || !req.body.password || !req.body.names || !req.body.number) {
//         return res.status(400).json({'msg': 'Please fill all entries'
//         });
//     }
exports.registerUser = (req, res) => {

        if(!req.body.email || !req.body.password || !req.body.names || !req.body.number) {
            return res.status(400).json({'msg': 'Please fill all fields'
            });
        }
    User.findOne({ email: req.body.email }, (err, user) =>{
        if(err) {
            return res.status(400).json({ 'msg':err});
        }
        if(user) {
            return res.status(400).json({ 'msg': 'User already exists' });
        }
        let newUser = User(req.body);
        newUser.save((err, user) => {
            if(err) {
                return res.status(400).json({ 'msg': err });
            }
            return res.status(201).json(user);
        });
    })
};
exports.loginUser = (req, res) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({'msg': 'Both parameters required: email and password'
        });
    }
    User.findOne({ email: req.body.email }, (err, user) =>{
        if(err) {
            return res.status(400).json({ 'msg':err});
        }
        if(!user) {
            return res.status(400).json({ 'msg': 'Wrong credentials' });
        }

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (isMatch && !err) {
                return res.status(200).json({
                    token: createToken(user)
                })
            } else {
                return res.status(400).json({
                    'msg': 'Email and Password dont match!'
                });
            }
        })
    })
}