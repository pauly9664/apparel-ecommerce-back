var express = require('express');
const session = require('express-session');
//  const request = require('request');
routes = express.Router();
const Contact = require('./models/contact');
const Sales = require('./models/sales');
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
routes.post('/contact', contactController.saveFeedback);
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
function sendMessage() {
    const options = {
        // Set the numbers you want to send to in international format
        to: ['+254717444970'],
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
    // let newPost = new Image();
      //  
    //    newPost.description = req.body.description;
    //    newPost.price = req.body.price; 
    //    newPost.count = req.body.count;
    //    newPost.category = req.body.category;
    //    newPost.save((err) =>{
    //     if(err){
    //         return res.status(400);
    //     }
    //     console.log(newPost);
    //         return res.status(201).json(newPost);
    // });
    }); 
    routes.post('/mailer', passport.authenticate('jwt', {session: false}), (req, res, next) => {
      var nodemailer = require('nodemailer');
      let newItem =  Sales(req.body);
      // newItem.description = req.body.description;
      // newItem.amount = req.body.amount;
      // newItem.count = req.body.count;
      // newItem.price = req.body.price;
      // newItem.item = req.body.item;
      console.log(newItem);
      newItem.save((err, cart) =>{
        if(err){
            return res.status(400);
        }
            return res.status(201).json(cart);
    });
      
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'gichaga1996@gmail.com',
        pass: 'G#719312830'
      }
    });
    // transporter.use('compile', hbs({
    //   viewEngine: 'express-handlebars',
    //   viewPath: './views/'
    // }))
    
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
    );
routes.post('/forgot', (req, res)=>{
  const thisUser = getUser(req.body.email);
  if(thisUser){
    const request = {
      email: thisUser.email,
    };
    createResetRequest(request);
    sendResetLink(thisUser.email);
  }
  res.status(200).json();
});
// routes.patch('/reset-password', (req, res)=>{
//   const thisRequest= getResetRequest(req.body);
//   if
// })
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
    Image.findById(imgId, (err, image)=>{
        if(err){
            return res.status(400);
        }
             res.setHeader('Content-Type', 'image/jpeg');
            filesyst.createReadStream(path.join(UPLOAD_PATH, image.filename)).pipe(res);
        
    });
});
routes.delete('images/:id', (req, res, next) =>{
})
// routes.post('/postSales', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  
//   let newSale = Sales(req.body);
//   // console.log(newSale);
//   newSale.save((err, sale) => {
//     if(err) {
//         return res.status(400).json({ 'msg': err });
//     }
//     return res.status(201).json(sale);
// });
//   var nodemailer = require('nodemailer');
//   var transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'gichaga1996@gmail.com',
//         pass: 'G#719312830'
//       }
//     });
    
//     var mailOptions = {
//       from: 'gichaga1996@gmail.com',
//       to: req.user.email,
//       subject: 'Preeti Fashions',
//       text: 'Your order has been processe'
//     };
    
//     transporter.sendMail(mailOptions, function(error, info){
//       if (error) {
//         console.log(error);
//       } else {
//         console.log('Email sent: ' + info.response);
//       }
//     });

// } );

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
routes.get('/getOrders', function(req, res) {
  console.log('Get all items');
  Sales.find({}, '-_v').lean()
  .exec(function(err, order){
      if(err){
          console.log("Error fetching orders");
      }
      // for(let i = 0; i < items.length; i++){
      //     var order = items[i];
      //     order.url = req.protocol + '://' +req.get('host')  + '/' + order._id;
      // }
      res.json(order);
  })

})
routes.get('/getPastActivities',passport.authenticate('jwt', {session: false}),
 function(req, res){
    //  try{
    console.log('Log previous sales');
    userLogged = `${req.user._id}`,
    Sales.find()
    .where('user_id').equals(userLogged)
    .exec(function(err, sale){
        if(err){
            console.log(err);
         }else{
            return res.json({accounts: sale});
          }
    })
// }catch(ex){
//     console.log(ex);
// }

})

//routes.post('/postItems', itemsController.postItems);
routes.post('/postItems', itemsController.postItems);

routes.get('/special', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({ name: `${req.user.names}`, number: `${req.user.number}`, email: `${req.user.email}`, id : `${req.user._id}` });
})
module.exports = routes;