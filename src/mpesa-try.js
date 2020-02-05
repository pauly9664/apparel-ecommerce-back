var User = require('./models/user');
var Mpesa = require('./models/mpesa');

  // TODO: Use the body object to extract the response
  //console.error(error);
  // if(error){
  //   console.error(error);
  // }
  var request = require('request'),
  oauth_token = "foQuPeR2LkltrIj6vgBkId0JJ7aT",
  url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
  auth = "Bearer " + oauth_token;
  request(
        {
          method: 'POST',
          url : url,
          headers : {
            "Authorization" : auth,
            'Accept': 'application/json'
          },
        json : {
            "BusinessShortCode": "174379",
             "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTkwODAyMjExMjU2",
             "Timestamp": "20190802211256",
             "TransactionType": "CustomerPayBillOnline",
            "Amount": "1",
            "PartyA": "254717444970",
             "PartyB": "174379",
            "PhoneNumber": "254717444970",
             "CallBackURL": "https://webhook.site/b2a8c230-41e3-44cb-9c63-3c571e6736b6",
            "AccountReference": "Lipa Pesa Jamaa",
            "TransactionDesc": "Imelipwa"
        }
      }),
    function (error, res, body){
      if(error){
        return console.error(error);
      }
      console.log(body)
    }
  
  // console.log(body)
 
// var request = require('request'),
//   oauth_token = "pUgUSjvksLlYhIbtIs3KytO5uQSB",
//   url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
//   auth = "Bearer " + oauth_token;
//     // let newMpesa = Mpesa(req.body);
//     // newMpesa.function(err, mpesa => {
//       // if(err){
//       //   return res.status(400).json({'msg': err});
//       // }
//       request(
//         {
//           method: 'POST',
//           url : url,
//           headers : {
//             "Authorization" : auth,
//             'Accept': 'application/json'
//           },
//         json : {
//             "BusinessShortCode": "174379",
//              "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTkwODAyMjExMjU2",
//              "Timestamp": "20190802211256",
//              "TransactionType": "CustomerPayBillOnline",
//             "Amount": "1",
//             "PartyA": "254717444970",
//              "PartyB": "174379",
//             "PhoneNumber": "254717444970",
//              "CallBackURL": "https://webhook.site/b2a8c230-41e3-44cb-9c63-3c571e6736b6",
//             "AccountReference": "Lipa Pesa Jamaa",
//             "TransactionDesc": "Imelipwa"
//         }
//       },
//         function (error, res, body) {
//           // TODO: Use the body object to extract the response
//           //console.error(error);
//           if(error){
//             return res.status(400).json({'msg': err});
//           }
//           console.log(body)
//         }
//        )
// module.exports = request;
