const express = require('express');
const error = require('../middlewares/error');
const exphbs = require('express-handlebars');

const user = require('../routes/api/user');
const auth = require('../routes/api/auth');
const surveys = require('../routes/api/surveys');

module.exports = function(app) {
    app.use(express.json());

	app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
	app.set('view engine', 'handlebars');

	app.use('/api/user', user);
	app.use('/api/surveys', surveys);
	app.use('/api/auth', auth);
	app.use(error);
};
