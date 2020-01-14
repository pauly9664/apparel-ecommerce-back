// var request = require('request'),
//     consumer_key = "WA3eGQeQe4MyGwmtyu1gH36q89BvrAg2",
//     consumer_secret = "1lGDqfwHv60o1ttw",
//     url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
//     auth = "Basic " + new Buffer.from(consumer_key + ":" + consumer_secret).toString("base64");
  
//     request(
//       {
//         url : url,  
//         headers : {
//           "Authorization" : auth
//         }
//       },
//       function (error, response, body) {
//         // TODO: Use the body object to extract OAuth access token
//         let accTokenBody = JSON.parse(body);
//         //let accToken = JSON.stringify(accTokenBody);
//         let obj = (accTokenBody.access_token);
//         console.log(obj);
//         module.exports = obj;
//       }

//     )