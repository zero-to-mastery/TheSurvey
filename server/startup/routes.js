const express = require('express');

//require express-handlebars to render templates
const exphbs = require('express-handlebars');

const user = require('../routes/api/user');
const surveys = require('../routes/api/surveys');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/user', user);
    app.use('/api/surveys', surveys);
    
    //Handlebars Middleware
    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

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
