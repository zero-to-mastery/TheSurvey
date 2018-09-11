const express = require('express');
const router = express.Router();

// * All routes inside this file have the path
// * "/api/user" bu default. So "/" will basically  mean "/api/auth/"
// * neat!

router.get('/test', (req, res) => res.json({ msg: 'auth route Works' }));

module.exports = router;
