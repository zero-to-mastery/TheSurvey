const express = require('express');
const user = require('../routes/api/user');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/user', user);

    app.get('/', (req, res) => {
        res.send("hi mom")
    });
};