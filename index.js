const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();
app.use(bodyParser.json());

// connect to the database and load models
require('./app/model').connect(config.dbUri);

// Initilaise routes
const routes = require('./app/routes');
app.use('/', routes);

// And listen to port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("listening on port", port);
})