
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
  to: 'gichagapaulz@gmail.com',
  subject: 'Preeti Fashions',
  html: '<h1>Your Account has been successfully created!</h1>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
