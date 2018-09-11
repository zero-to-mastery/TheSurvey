const express = require('express')
const app = express()

const user = require('./routes/user')
const auth = require('./routes/auth')

app.get('/', (req, res) => {
  res.json({ msg: 'I did it mom!' })
})

// ? This will make express use specific routes.
// * All routes to the api must use "/api/routename"

// * For authentication related routes (login, register)
app.use('/api/auth', auth)

// * For other user specific routes (profile, user settings, etc...)
app.use('/api/user', user)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Listening to port ${PORT} and it rocks!`))
