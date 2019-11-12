var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gichaga1996@gmail.com',
    pass: 'FIFA2020'
  }
});

var mailOptions = {
  from: 'gichagapaulz@gmail.com',
  to: 'gichaga1996@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Fanya Kazi nanii!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});