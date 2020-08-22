const requests = [];
const users = require('../models/user');
const Reset = require('../models/PasswordReset');
const { create } = require('./contact');

function createResetRequest(resetRequest) {
    requests.push(resetRequest);
    // let createReq = Reset();
    // createReq.save((requests));
    console.log("this is the request body", requests)
}

function getResetRequest(id) {
    console.log("ID CHECK",id);
    const thisRequest = Reset.find(res => console.log("Ndo ii",res));
    return thisRequest;
}
 
 function getUser(email) {
     const thisUser = users.find(user => user.email === email);
     return thisUser;
 }
 
//  function updateUser(user) {
//      const thisUserIndex = users.findIndex(local => local.email === user.email);
//      users[thisUserIndex] = user;
//  }

module.exports = {
    createResetRequest,
    getResetRequest,
    getUser,
    // updateUser,
    requests
}
