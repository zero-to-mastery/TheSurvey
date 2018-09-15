const express = require('express')
const mongoose = require('mongoose')

//require express-handlebars to render templates
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

// ? Auth route is public / User route is restricted
const user = require('../routes/api/user')
const auth = require('../routes/api/auth')

const surveys = require('../routes/api/surveys')

module.exports = function(app) {
	//Handlebars Middleware
	app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
	app.set('view engine', 'handlebars')

	app.use('/api/user', user)

	//Use surveys Router - this comes after middlewares
	app.use('/api/surveys', surveys)

	app.get('/', (req, res) => {
		const title = 'Hi Mom!'
		res.render('index', { title: title })
		// res.send("hi mom") - original code
	})
}
