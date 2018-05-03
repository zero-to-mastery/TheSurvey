const express = require('express');
const auth = new express.Router();
const userSignup = require('./userSignup');
const userLogin = require('./userLogin');
const passwordRecovery = require('./passwordRecovery');
const passwordReset = require('./passwordReset');

auth.post('/userLogin', userLogin);
auth.post('/userSignup', userSignup);
// endpoint from Oops I fogot my password page (payload: email)
auth.post('/passwordRecovery', passwordRecovery);
// endpoint from password reset screen (payload: userId, user email (optional), new password)
auth.post('/passwordReset', passwordReset);

module.exports = auth;