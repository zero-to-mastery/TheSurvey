const bcrypt = require('bcrypt-nodejs')
const bodyParser = require('body-parser')
const express = require('express')
const User = require('../../model/User')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

//front end login form points here
app.post('/', (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json('email or password missing')
    }
    const hash = bcrypt.hashSync(password)
    
    axios.post('/login', {  //point this at the database API login endpoint
        email: email,
        password: hash,
    })
    .then(response => {
        if (response === hash) {
            res.status(200).json('success')
        } else {
            res.status(400).json('invalid user name or password')
        }
    })
    .catch(error => console.log)
})






