// All the authorisation functionality lives in here
// The user data (minus password/hash) will need to be returned

module.exports = (req, res) => {
    res.status(200).json({ response: "This is the sign up route. It will return user data once the user has been successfully registered." });
};


