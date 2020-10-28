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
        let vat = req.body.description;
        let cat = vat.split(',')
        console.log("Array ndo ii", cat);
        // newSale.description = req.body.description;
        // newSale.amount =req.body.amount;
        // newSale.delivery_status =req.body.delivery_status;
        // newSale.payment_status = req.body.payment_status;

        // console.log(newSale);
        newSale.save((err, sale) => {
          if(err) {
            console.log("Noo")
              // return res.status(400).json({ 'msg': err });
          }
          console.log("yess")
          // return res.status(201).json(sale);
});
const pdfDocument =require('pdfkit');
const fs = require('fs');

var doc = new pdfDocument();
var curr = Date.now();
doc.pipe(fs.createWriteStream('./invoices/' + req.body.user_id + '-' + curr + '.pdf'));
// var imgData = '/src/p20.jpg'
// doc.setFontSize(22);
// doc.addImage(imgData, 'JPG', 15,40,80,80)

let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
doc.font('Times-Bold').fontSize(15).text('INVOICE DETAILS', )
doc.fontSize(10).text('Invoice Date: ' + date + '-' + month + '-' + year + '  ' + hours + ':' + minutes , {
  align: 'left'
})
doc.moveDown();
doc.fontSize(10).text('Preeti Fashions Studio',{
  align: 'right'
})
doc.fontSize(10).text('Muindi Mbingu St, Opp Absa',{
  align:'right'
})
doc.fontSize(10).text('preeti@gmail.com', {
  align: 'right'
})
doc.fontSize(10).text('0719843989', {
  align: 'right'
})
doc.fontSize(10).text('http://localhost:8100', {
  align: 'right'
})
doc.moveDown()
doc.fontSize(10).text('BILL TO', {
  align: 'left'
})
doc.fontSize(10).text(req.user.names , {
  align: 'left'
})
doc.fontSize(10).text(req.user.email, {
  align: 'left'
})
doc.fontSize(10).text(req.user.number , {
  align: 'left'
});
doc.moveDown();
doc.fontSize(11).text('Items Ordered')
// doc.fontSize(12).text('Order Details',25, 25,{
//   align: 'center',
//   // valign: 'center'
// } )
for(var i=0; i<cat.length ; i++){
doc.fontSize(10).text(cat[i], 100)
}
doc.moveDown();
doc.fontSize(10).text('Delivery Details............' + req.body.delivery_status)
doc.fontSize(10).text('Payment Details.............' + req.body.payment_status)
doc.moveDown();
doc.fontSize(12).text('Invoice Amount..............' + req.body.amount, {
  align: 'right',
  fill: 'red'
})
doc.moveDown();
doc.image('./src/PreetiLogo.png',{
  fit: [70, 140],
  align: 'right'
});
doc.fontSize(11).text('*TERMS AND CONDITIONS', {
  align: 'left'
});
doc.fontSize(8).text('Return of goods limited to 3 days upon placing the order.', {
  align: 'left'
})
doc.fontSize(8).text('In case of any queries, feedback etc, click http://localhost:8100/contact .', {
  align: 'left'
})
doc.fontSize(8).text('Alternatively you can reach us through our telephone lines: 0737200842', {
  align: 'left'
})
doc.end();
console.log("Gidhaa", curr);


console.log('NDO II DATE', date);
console.log("Ndo ii sale record", req.body)
var filename = req.body.user_id +'-'+ curr + '.pdf';
// fs.writeFile(filename, doc.output(), function(err, data){
//     if(err){
//         console.log('Haijawork',err)
//     }
// console.log("file iko", curr);
// })


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
              {filename: filename, path:'./invoices/'+filename}
            ],
             html: '<h3>Hi ' +req.user.names+'<br>Your order has been received and is being prepared for delivery. Your goods will be delivered in shortest time possible. Attached below is the invoice. Thanks</h3>',    
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
     
}