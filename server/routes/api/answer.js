const express = require('express');
const router = express.Router();
const answerController = require('../../controllers/answerController')


router.post('/', answerController.validate);
router.get('/', (req,res) =>{
    res.send('sadadasd')
});

module.exports = router;
