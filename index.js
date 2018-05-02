const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the index route. Enjoy your stay!')
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})