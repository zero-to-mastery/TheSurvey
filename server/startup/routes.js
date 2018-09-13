const express = require('express');
const mongoose = require('mongoose');

//require express-handlebars to render templates
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const user = require('../routes/api/user');
const surveys = require('../routes/api/surveys');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/user', user);
    app.use('/surveys', surveys);
    
    //Handlebars Middleware
    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    
    //bodyParser Middleware
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
        const title = 'Hi Mom!';
        res.render('index', {title:title});
        // res.send("hi mom") - original code
    });
    
    //About Route
    app.get('/about', (req, res) => {
        res.render('about');
    });
};
