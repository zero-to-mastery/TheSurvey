const UserController = require('../../controllers/userController');
const express = require('express');
const router = express.Router();

router.get('/me', UserController.test);
router.post('/', UserController.test2);

module.exports = router;