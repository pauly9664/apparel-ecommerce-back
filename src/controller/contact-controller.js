var Contact = require('../models/contact');
var jwt = require('jsonwebtoken');
var config = require('../config/config');

function createToken(contact) {
    return jwt.sign({ id: contact.id, feedback: contact.feedback }, 
        config.jwtSecret)
}
exports.saveFeedback = (req, res) => {
        let newContact =Contact(req.body);
        newContact.save((err, contact) => {
            if(err) {
                return res.status(400).json({ 'msg': err });
            }
            return res.status(201).json(contact);
})
};