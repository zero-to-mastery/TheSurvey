const express = require('express');
const exphbs = require('express-handlebars');

const user = require('../routes/api/user');
const auth = require('../routes/api/auth');
const surveys = require('../routes/api/surveys');
const answer = require('../routes/api/answer');

module.exports = function(app) {
	//Handlebars Middleware
	app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
	app.set('view engine', 'handlebars');
    app.use(express.json());
	
	app.use('/api/answer', answer);
	app.use('/api/user', user);
	app.use('/api/surveys', surveys);
	app.use('/api/auth', surveys);

};
