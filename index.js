const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Initilaise routes
const routes = require('./app/routes');
app.use('/', routes);

// And listen to port 3000
app.listen(3000, () => {
    console.log("listening on port 3000");
})