var Sales = require('../models/sales');
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var config = require('../config/config');

function createToken(sale) {
    return jwt.sign({ id: sale.id }, 
        config.jwtSecret)
}
exports.saveSale = (req, res) => {
  
        let newSale = Sales(req.body);
        newSale.save((err, sale) => {
            if(err) {
                return res.status(400).json({ 'msg': err });
            }
            return res.status(201).json(sale);
});
}