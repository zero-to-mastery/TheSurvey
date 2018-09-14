const express = require('express')
const mongoose = require('mongoose')

//require express-handlebars to render templates
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

// ? Auth route is public / User route is restricted
const user = require('../routes/api/user')
const auth = require('../routes/api/auth')

const surveys = require('../routes/api/surveys')
const answer = require('../routes/api/answer')

module.exports = function(app) {
	//Handlebars Middleware
	app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
	app.set('view engine', 'handlebars')
	
	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: false }))
	// parse application/json
	app.use(bodyParser.json())
	
	app.use('/answer', answer)
	app.use('/api/user', user)

	//Use surveys Router - this comes after middlewares
	app.use('/surveys', surveys)



	app.get('/', (req, res) => {
		const title = 'Hi Mom!'
		res.render('index', { title: title })
		// res.send("hi mom") - original code
	})
}
