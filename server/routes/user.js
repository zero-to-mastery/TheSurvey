const express = require('express')
const router = express.Router()

// * All routes inside this file have the path
// * "/api/user" bu default. So "/" will basically  mean "/api/user/"
// * neat!

router.get('/test', (req, res) => res.json({ msg: 'user route Works' }))

module.exports = router