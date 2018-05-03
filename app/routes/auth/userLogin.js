// All the authorisation functionality lives in here
// The user data (minus password/hash) will need to be returned

module.exports = (req, res) => {
    res.status(200).json({ response: "This is the login route. It will return user data once the user has been authorised." });
};


