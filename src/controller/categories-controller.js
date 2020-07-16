var Categories = require('../models/productCategories');
var jwt = require('jsonwebtoken');
var config = require('../config/config');

function createToken(category) {
    return jwt.sign({ id: category.id, name: category.name }, 
        config.jwtSecret)
}
exports.fetchCategories= (req, res) => {
    let newItem =Categories(req.body);
    //Contact.create(newContact);
    newItem.save((err, category) => {
        if(err) {
            return res.status(400).json({ 'msg': err });
        }
        return res.status(201).json(category);
         });
};