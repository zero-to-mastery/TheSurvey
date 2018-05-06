// All the authorisation functionality lives in here
// The user data (minus password/hash) will need to be returned

const validator = require('validator');
const User = require('../../models/User');
const bcrypt = require('bcrypt');

// check payload received from front end has valid inputs
// valid inputs expected are:
// a correctly formed email address (using validator package for this)
// and a password of at least 8 characters - could put more checks in here (i.e. upper and lower case and numbers)
//
// function returns an object with a success value
// and an individual error mesaage (per field) for displaying on the gui
// and an overall error message for displaying on the gui

const validateSignupForm = (payload) => {
    const errors = {}
    let isFormValid = true
    let message = ""

    if (!payload || typeof payload.username !== 'string') {
        isFormValid = false;
        errors.email = 'Please provide a valid username.';
    }

    if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
        isFormValid = false;
        errors.email = 'Please provide a valid email address.';
    }
    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
        isFormValid = false;
        errors.password = 'Password must have at least 8 characters.';
    }
    if (!isFormValid) {
        message = 'Check the form for errors.';
    }  
    return {
        success: isFormValid,
        message,
        errors
    }
}

const generateHash = (password) => {
    const saltRounds = 10;
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds)
            .then(hash => {
                resolve(hash)
            })
            .catch(err =>{
                reject(err)
            })
    })
 }

module.exports = (req, res) => {
    // Check the form body passes the validation tests
    const validationResult = validateSignupForm(req.body)
    // If the validation did NOT succeed return the errors for display in the gui
    if (!validationResult.success) {
        return res.status(400).json(validationResult);
    }
    
    // Hash the plain text password
    generateHash(req.body.password)
        .then(hash => {
            User.create(
                {
                    name: req.body.username,
                    email: req.body.email,
                    password: hash
                })
                .then(user => {
                    return res.status(200).json({ message: "Success, user saved.", user })
                })
                .catch(err => {
                    console.log(err)
                    return res.status(400).json({ message: "An error occured creating the user.", err })
                })
        })
        .catch(err => {
            console.log(err)
            return res.status(400).json({ message: "An error occurred generating the password hash", err})
        })
};

