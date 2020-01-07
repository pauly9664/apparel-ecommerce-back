// var request = require('request'),
//  // oauth_token = "L8r7tVfoJ0JoBtBzwibeFVix0Q7I",
//   urls = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
//   consumer_key = "WA3eGQeQe4MyGwmtyu1gH36q89BvrAg2";
//   consumer_secret = "Y1lGDqfwHv60o1ttw";
//   url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
//   auth = "Basic " + new Buffer(consumer_key + ":" + consumer_secret).toString("base64");
//   request(
//     {
//       method: 'POST',
//       url : urls,
//       headers : {
//         "Authorization" : auth
//       },
//     json : {
//         "BusinessShortCode": "174379",
//         "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTkwODAyMjExMjU2",
//         "Timestamp": "20190802211256",
//         "TransactionType": "CustomerPayBillOnline",
//         "Amount": "1",
//         "PartyA": "254717444970",
//         "PartyB": "174379",
//         "PhoneNumber": "254717444970",
//         "CallBackURL": "https://google.com",
//         "AccountReference": "Lipa Pesa Jamaa",
//         "TransactionDesc": "Imelipwa"
//     }
//   },
//     function (error, response, body) {
//       // TODO: Use the body object to extract the response
//       //console.error(error);
//       console.log(body)
//     }
//   )
//   module.exports = request;

