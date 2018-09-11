const UserController = require('../../controllers/userController');
const express = require('express');
const router = express.Router();

router.get('/test', UserController.test);
router.get('/test2', UserController.test2);

module.exports = router;