const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')

const User = mongoose.model('user')

// * This function stuffs the user id into the cookie
passport.serializeUser((user, done) => {
	done(null, user.id)
})

// * This function gets the id from the cookie
passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user)
	})
})

// ? Login Strategy
passport.use(
	'login',
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true,
			session: false
		},
		async (req, email, password, done) => {
			await User.findOne({ email: email }, (err, user) => {
				// * If there is an error we do nothing
				if (err) {
					return done(err)
				}
				// * If there is no user with that email we do nothing either
				if (!user) {
					return done(null, false)
				}
				// * But if the bcrypt compares the password and is valid then we return the user
				bcrypt.compare(password, user.password).then(isValid => {
					if (isValid) {
						return done(null, user)
					} else {
						return res.status(400).json({ password: 'Password Incorrect' })
					}
				})
			})
		}
	)
)

module.exports = {
	async register(req, res) {
		await User.findOne({ email: req.body.email }).then(user => {
			if (user) {
				return res.status(400).json({ email: 'Email already exists' })
			} else {
				const newUser = new User({
					name: req.body.name,
					email: req.body.email,
					password: req.body.password
				})

				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) throw err
						newUser.password = hash
						newUser.save(user => res.json(user)).catch(err => console.log(err))
					})
				})
			}
		})
	}
}
