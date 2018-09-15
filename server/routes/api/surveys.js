const SurveyController = require('../../controllers/surveyController');
const express = require('express');
const router = express.Router();

// Route for testing purposes - display survey form
router.get('/add', (req, res) => {
    res.render('surveys/add');
});

router.get('/', SurveyController.index);

router.get('/:id', SurveyController.view);

router.post('/', SurveyController.create);

router.put('/:id', SurveyController.update);

router.delete('/:id', SurveyController.delete);

module.exports = router;
