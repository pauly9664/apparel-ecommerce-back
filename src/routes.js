var express = require('express');
const session = require('express-session');
//  const request = require('request');
routes = express.Router();
const Contact = require('./models/contact');
const Reset = require('./models/PasswordReset');
const Sales = require('./models/sales');
const User = require('./models/user');
const categories = require('./models/productCategories');
var Mpesa = require('./models/images');
const Image = require('./models/images');
const Cart = require('./models/cart');
const hbs = require('nodemailer-express-handlebars');
var UPLOAD_PATH = require('./server');
var upload = require('./server');
var path = require('path');
var filesyst = require('fs');
var del = require('del');
const app = express();
var userController = require('./controller/user-controller');
var imagesController = require('./controller/images-controller')
var contactController = require('./controller/contact-controller');
var itemsController = require('./controller/items-controller');
var salesController = require('./controller/sales-controller');
var categoriesController = require('./controller/categories-controller');
var passport = require('passport');
const uuidv1 = require('uuid/v1');
var bcrypt = require('bcrypt');
const { getResetRequest, getUser, updateUser, createResetRequest } = require("./models/resetRequests");
const { count } = require('console');

//var obj = require('./mpesa-oauth');
// let obj,
//oauth_token = 'QfBfJzYRBAfJdCUXPyV8rn3z80mm'
// consumer_key = "WA3eGQeQe4MyGwmtyu1gH36q89BvrAg2",
// consumer_secret = "1lGDqfwHv60o1ttw",

// url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
// auth = "Basic " + new Buffer.from(consumer_key + ":" + consumer_secret).toString("base64");

// url1 = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
// auth1 = "Bearer " + oauth_token;

app.use(session({secret: 'skrr',saveUninitialized: true,resave: true}));
routes.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.send('Hello stupid man!');
});
// request('')
routes.post('/register', userController.registerUser);
routes.post('/login', userController.loginUser);
routes.post('/registerInternal', userController.registerInternalUser);
routes.post('/loginInternal', userController.loginInternalUser);
routes.post('/contact', contactController.saveFeedback);
routes.post('/user_details', (req, res)=>{
  const user_id = req.body.id;
  User.find({}, '-_v').lean().where('_id').equals(user_id).exec((err, user)=>{
    if(err){
        return res.status(400);
    }
    console.log("User", user);
    res.json(user);
});
})
routes.post('/postSales', passport.authenticate('jwt', {session: false}), salesController.saveSale);

routes.all('/mpesa', passport.authenticate('jwt', { session: false }), (req, res, next) => {
url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
consumer_key = "WA3eGQeQe4MyGwmtyu1gH36q89BvrAg2",
consumer_secret = "1lGDqfwHv60o1ttw",
auth = "Basic " + new Buffer.from(consumer_key + ":" + consumer_secret).toString("base64");
  //var oauth_token = req.body.params;
    request(
      {
        url : url,
        headers : {
          "Authorization" : auth
        }
      },
      function (error, response, body) {
        // TODO: Use the body object to extract OAuth access token
        let accTokenBody = JSON.parse(body);
        //let accToken = JSON.stringify(accTokenBody);
        // oauth_token = req.session;
         oauth_token = accTokenBody.access_token;
        if(error){
          return console.error(error, 'Session Expired');
        }
        console.log(oauth_token);
        return res.json({access_token: oauth_token});           
                }
)}
);
routes.get('/tokenGetter', (req, res)=>{
  //console.log(obj);
  //return res.json({ name: `${req.user.names}`, number: `${req.user.number}`, email: `${req.user.email}`, id : `${req.user._id}` });
  return res.json({access_token: obj});
})
routes.all('/payments', passport.authenticate('jwt', {session: false}), (req, res, next) => {
//let token_body = Mpesa(obj);
//oauth_token = token_body._id;
url1 = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
auth1 = "Bearer " + oauth_token;
 // oauth_token = '5e3b096d3daa6c2538365a55';
  request({
  method: 'POST',
  url : url1,
  headers : {
    "Authorization" : auth1,
  },
json : {
    "BusinessShortCode": "174379",
     "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTkwODAyMjExMjU2",
     "Timestamp": "20190802211256",
     "TransactionType": "CustomerPayBillOnline",
    "Amount": "1",
    "PartyA": req.user.number,
     "PartyB": "174379",
    "PhoneNumber": req.user.number,
     "CallBackURL": "https://webhook.site/b2a8c230-41e3-44cb-9c63-3c571e6736b6",
    "AccountReference": "Lipa Pesa Jamaa",
    "TransactionDesc": "Imelipwa"
  }
},
  function (error, res, body) {
    // TODO: Use the body object to extract the response
    
    userLogged = `${req.user._id}`
    if(error){
      return console.error(error);
    }
    //console.error(error);
    console.log(body);
  }
)
}

);
routes.all('/sendtexts', (req, res) => {
  const credentials = {
    apiKey: '50cfc47db6e731f241011b5c9f8e148c51ae20ba438ce7027aae439451c6fbe6',
    username: 'sandbox',
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);
// Sales.find()
// Get the SMS service
const sms = AfricasTalking.SMS;
const contacts = User.find({}, 'number').exec((err, resp)=>{

  if(err){
    console.log("Errrror");
  }
  
  function sendMessage() {
    const options = {
        // Set the numbers you want to send to in international format
        to: [''],
        // Set your message
        message: "Welcome to Varsity",
        // Set your shortCode or senderId
        from: '6991'
    }
    // That’s it, hit send and we’ll take care of the rest
    sms.send(options)
        .then(console.log)
        .catch(console.log);
}
sendMessage();
console.log("Contact List ->", resp)
  return res.json(resp);
});


// function sendMessage() {
//     const options = {
//         // Set the numbers you want to send to in international format
//         to: ['+254717444970'],
//         // Set your message
//         message: "Welcome to Varsity",
//         // Set your shortCode or senderId
//         from: '6991'
//     }
//     // That’s it, hit send and we’ll take care of the rest
//     sms.send(options)
//         .then(console.log)
//         .catch(console.log);
// }
// sendMessage();
})
routes.get('/fetchCategories', function(req, res) {
  console.log('Get all items');
  categories.find({}, '-_v').lean()
  .exec(function(err, categories){
      if(err){
          console.log("Error fetching orders");
      }
      for(let i = 0; i < categories.length; i++){
          var img = categories[i];
          
      }
      res.json(categories);
  })

})

routes.post('/images', upload.single('image'), imagesController.savePost,
 (req, res, next) =>{
    }); 
    routes.post('/mailer', passport.authenticate('jwt', {session: false}), (req, res, next) => {
      var nodemailer = require('nodemailer');
      let newItem =  Sales(req.body);
  
      console.log(newItem);
      newItem.save((err, cart) =>{
        if(err){
            
            console.log('Error')
        }
        console.log("True");
         
    });
      
    let transporter = nodemailer.createTransport({
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
        {filename: filename, path:'./src/'+filename+'.jpg'}
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
    );
routes.post('/forgot',(req, res)=>{
  const thisUser = req.body.email;
  console.log(thisUser)
  User.findOne({email: thisUser}, '-_v').lean()
  .exec(function(err, result){
    if(err) {
      return res.status(400).json({ 'msg':err});
  }
    if(result === null){
      console.log('Hakuna any');
      return res.status(400).json({ 'msg': 'User does not exist, kindly confirm if this is the email used' });
    }
    console.log("Exists", result);
    const id = uuidv1();
    const request = {
      request_id: id,
      email: thisUser
    };

    let resetBody = Reset(request);

    resetBody.save((request));
    var nodemailer = require('nodemailer');
   let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gichaga1996@gmail.com',
      pass: 'G#719312830'
    }
  });

  var mailOptions = {
    from: 'gichaga1996@gmail.com',
    to: thisUser,
    subject: 'Preeti Fashions',
    attachments: [
      {filename: 'preetiLogo1.png', path:'./src/preetiLogo1.png'}
    ],
     html: `<h3>Hi <br>To reset your password, please click on this link which http://192.168.100.35:8100/menu/sendmail-reset/${id}, which will direct you to the reset password page</h3>`,
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

    return res.status(200).json({ 'msg': 'Your request has been received. Please check your email for further instructions' });
    
  })
})

routes.patch("/reset", (req, res) => {
  const thisRequestId = req.body.id;
  const thisRequestMail = req.body.email;
  const thisRequestPass = req.body.password;
  console.log("Ndo ii mail nimetuma", thisRequestMail);
  const reseter = Reset.find({},).where('request_id').equals(thisRequestId).exec((err, resets)=>{
    if(err){
      return res.status(400).json({'msg': err})
    }
  
    console.log("Ndo ii mail", resets);
  
     return res.status(201).json(resets);
     
  })
      User.find({},).where('email').equals(thisRequestMail).exec((err, resp)=>{
        if(err){
          return res.status(400).json({'msg': "The Email Address used does not exit in our system"})
        }
        console.log("User", resp)
        bcrypt.hash(thisRequestPass, 10).then(hashed => {
         
              resp.password = hashed;
              console.log("hashed", hashed)
         User.updateOne({},{password: hashed}).where('email').equals(thisRequestMail).exec((err, res)=>{
          if(err){
            return res.status(400).json({'msg': 'Network Error, try again'});
          }
          return res.status(201).json({'msg': 'Password reset successful'})
          // console.log("Updated");
        })
        })
        return resp;
      });
});
routes.patch('/confirmView', (req,res)=>{
  const order = req.body.order_id;
  const viewership = req.body.view_status;


  Sales.updateOne({}, {viewed_status: viewership}).where('_id').equals(order).exec((err, res)=> {
    if(err){
      return res.status(400).json({'msg': 'Network Error!'});
    }
    console.log("yeeees");
  })
})
routes.get('/images', (req, res, next)=>{
    Image.find({}, '-_v').lean().exec((err, images)=>{
        if(err){
            return res.status(400);
        }
            for(let i = 0; i < images.length; i++){
                var img = images[i];
                img.url = req.protocol + '://' +req.get('host')  + '/' + img.filename;
        } 
        res.json(images);
    });
});
routes.get('/images/:id', (req, res, next) =>{
    let imgId = req.params.id;
    console.log("This is the object id", imgId);
    Image.findById(imgId, (err, image)=>{
        if(err){
            return res.status(400);
        }
             res.setHeader('Content-Type', 'image/jpeg');
            filesyst.createReadStream(path.join(UPLOAD_PATH, image.filename)).pipe(res);
        
    });
});
routes.delete('/images/:id', (req, res, next) =>{
})


routes.get('/getItems', function(req, res) {
    console.log('Get request for all contacts');
    Contact.find({})
    .exec(function(err, contact){
        if(err){
            console.log("Error getting responses from clients");
        }else{
            res.json({item: contact});
        }
    })
})
routes.get('/getOrders', (req, res)=> {
  console.log('Get all items');
  Sales.find({}, '-_v').lean()
  .exec(function(err, order){
      if(err){
          console.log("Error fetching orders");
      }
      for(let i = 0; i < order.length; i++){
          var orders = order[i];
          orders.url = req.protocol + '://' +req.get('host')  + '/api/getOrder/' + orders._id;
      }
      res.json(order);
  })

})
routes.get('/getNewOrders', (req, res)=>{
  Sales.countDocuments({viewed_status: 0}).exec(function(err, result){
    if(err){
      console.log("Nothing");
    }
    res.json(result);
      console.log(res)
  })
})  
routes.get('/getOrder/:id', function(req,res){
let orderId = req.params.id;
Sales.findById(orderId, (err, order)=>{
  if(err){
      return res.status(400);
  }
     res.json(order);
  
});
})
routes.get('/getPastActivities', passport.authenticate('jwt', {session: false}),(req, res)=>{
    //  try{
   
    userLogged = `${req.user._id}`;
    console.log('Log previous sales', userLogged);
    Sales.find({}, '-v').lean().where('user_id').equals(userLogged).exec((err, sale)=>{
        if(err){
           console.log(err);
         }
           console.log("Orders for this:", sale)
            return res.status({accounts:sale});
          
    })

})
routes.post('/postItems', itemsController.postItems);

routes.get('/special', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({ name: `${req.user.names}`, number: `${req.user.number}`, email: `${req.user.email}`, id : `${req.user._id}` });
})
module.exports = routes;