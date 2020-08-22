var Sales = require('../models/sales');
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var config = require('../config/config');
var passport = require('passport');

function createToken(sale) {
    return jwt.sign({ id: sale.id }, 
        config.jwtSecret)
}
exports.saveSale = (req, res, next) => {
  
        let newSale = Sales(req.body);
        // newSale.description = req.body.description;
        // newSale.amount =req.body.amount;
        // newSale.delivery_status =req.body.delivery_status;
        // newSale.payment_status = req.body.payment_status;

        // console.log(newSale);
        newSale.save((err, sale) => {
          if(err) {
              return res.status(400).json({ 'msg': err });
          }
          return res.status(201).json(sale);
});
        var nodemailer = require('nodemailer');
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'gichaga1996@gmail.com',
              pass: 'G#719312830'
            }
          });
          
          var mailOptions = {
            from: 'gichaga1996@gmail.com',
            to: req.user.email,
            subject: 'Preeti Fashions',
            attachments: [
              {filename: 'preetiLogo1.png', path:'./src/preetiLogo1.png'}
            ],
             html: '<h3>Hi ' +req.user.names+'<br>Your order has been received and is being processed. Login to the app to follow up on the order placed. Your goods will be delivered in 3 days. Thanks</h3>',    
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
     
}