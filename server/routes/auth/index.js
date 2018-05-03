const express = require('express');
const auth = new express.Router();
const userSignup = require('./userSignup');
const userLogin = require('./userLogin');

auth.post('/userLogin', userLogin);
auth.post('/userSignup', userSignup);

module.exports = auth;