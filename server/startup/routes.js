const express = require('express');
const user = require('../routes/api/user');
const surveys = require('../routes/api/surveys');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/user', user);
    app.use('/api/surveys', surveys);

    app.get('/', (req, res) => {
        res.send("hi mom")
    });
};
