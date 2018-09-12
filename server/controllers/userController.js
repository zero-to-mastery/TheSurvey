// Generally load user model here, and validation etc
//const User = require('../models/user');
//const Joi = require('joi');
//const _ = require('lodash');


// Each of the function test and test2 are reacting to a specific call, which means:
// GET on /test will trigger only UserController.test
// GET on /test2 will trigger only UserController.test2
module.exports = {
    test(req, res) {
        res.send('Hellloow from userController');
    },
    test2(req, res) {
        res.send('Hellloow from userController again :)');
    }
};