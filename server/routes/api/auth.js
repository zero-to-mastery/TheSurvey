const express = require('express')
const router = express.Router()
const passport = require('passport')
const bcrypt = require('bcryptjs')
// * Load user model
const User = require('../../models/User')

// * All routes inside this file have the path
// * "/api/user" by default. So "/" will basically  mean "/api/auth/"
// * neat!

router.get('/test', (req, res) => res.json({ msg: 'auth route Works' }))

// TODO - This will need a cleanup later
router.post('/register', passport.authenticate('register'), (req, res) => {
	res.redirect('/')
})

module.exports = router
