const bcrypt = require('bcrypt-nodejs')
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const User = require('../../model/User')

const app = express()
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/User')
const db = mongoose.connection

//front end login form points here
app.post('/', (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json('email or password missing')
    }
    User.findOne({ 'email': email }, 'password', (err, pass) => {
        const match = bcrypt.compareSync(pass, password)
        if (match) {
            res.status(200).json('success')
            //fetch user data from user microservice and return to front end
        } else {
            res.status(400).json('invalid user name or password')
        }
    })

})






