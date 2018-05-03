// This is the master root route. All other routes will be descendents from here

const express = require('express');
const routes = new express.Router();
const auth = require('./auth');
const api = require('./api');


// Authorisation routes:
// http(s)://<server>:<port>/auth/userLogin (i.e http://localhost:3000/auth/userLogin)
// http(s)://<server>:<port>/auth/userSignup (i.e. http://localhost:3000/auth/userSignup)

routes.use('/auth', auth);

// Other api routes:
// http(s);//<server>:<port>/api/getAllQuestions (i.e. http://localhost:3000/api/getAllQuestions)

routes.use('/api', api);

// Default root route - could change this to '*' but that should probably be reserved for a 
// seperate 404 page.

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the root route' });
});

routes.get('*', (req, res) => {
    res.status(404).json({ error: 'Oh no! Page not found' });
})

module.exports = routes;
