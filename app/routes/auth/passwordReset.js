// This is the endpoint that will be hit when the user submits their new passowrd
// from the new password screen on the FE.

module.exports = (req, res) => {
    res.status(200).json({ response: "We have just saved your new password in the database"});
}