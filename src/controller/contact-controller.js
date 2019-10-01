var Contact = require('../models/contact');
var jwt = require('jsonwebtoken');
var config = require('../config/config');

function createToken(contact) {
    return jwt.sign({ id: contact.id, feedback: contact.feedback }, 
        config.jwtSecret, {
        expiresIn: 200
    })
}
exports.saveFeedback = (req, res) => {
    // Contact.findOne({ feedback: req.body.feedback }, (err, contact) =>{
        // if(err) {
        //     return res.status(400).json({ 'msg':err});
        // }
        // if(contact) {
        //     return res.status(400).json({ 'msg': 'Comment posted' });
        // }
        let newContact =Contact(req.body);
        //Contact.create(newContact);
        newContact.save((err, contact) => {
            if(err) {
                return res.status(400).json({ 'msg': err });
            }
            return res.status(201).json(contact);
//         });
//     });
// }

})
};