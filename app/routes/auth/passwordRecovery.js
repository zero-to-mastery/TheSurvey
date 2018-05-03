//Password recovery endpoint

const nodemailer = require('nodemailer');

module.exports = (req, res) => {
    // Assume user has entered email address (personal data should be handled in the body of a post request)
    // and hit this endpoint

    // send the email options - nodemailer looks like a good option

    res.status(200).json({ response: "Some fool has forgotten their password, never happens to me <cough>" });
};


