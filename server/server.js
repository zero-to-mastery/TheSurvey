const winston = require('winston');
const morgan = require('morgan');
const express = require('express');
const app = express();

require('dotenv').config();
require('./startup/logging')();
require('./startup/db')();

const user = require('./routes/user');
const auth = require('./routes/auth');

app.get('/', (req, res) => {
  res.send("hi mom")
});

// ? This will make express use specific routes.
// * All routes to the api must use "/api/routename"

// * For authentication related routes (login, register)
app.use('/api/auth', auth);

// * For other user specific routes (profile, user settings, etc...)
app.use('/api/user', user);


app.use(express.urlencoded({extended: true}));
app.use(morgan('combined'));

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => winston.info(`Listening on port ${PORT}...`));
