const express = require('express')
const cookieSession = require('cookie-session')
const passport = require('passport')
const app = express()

app.use(bodyParser.json())
const authKeys = require('./authKeys') // * Keep it below the 'dotenv'

// ? Using cookie based sessions and defining max Age of a cookie + cookie secret (key)
app.use(
	cookieSession({
		maxAge: 2592000000, // * 30 days
		keys: [authKeys.cookieKey]
	})
)
