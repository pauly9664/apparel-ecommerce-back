var Items = require('../models/items');
var jwt = require('jsonwebtoken');
var config = require('../config/config');

function createToken(item) {
    return jwt.sign({ id: item.id, name: item.name }, 
        config.jwtSecret)
}
exports.postItems= (req, res) => {
    let newItem =Items(req.body);
    //Contact.create(newContact);
    newItem.save((err, item) => {
        if(err) {
            return res.status(400).json({ 'msg': err });
        }
        return res.status(201).json(item);
         });
};