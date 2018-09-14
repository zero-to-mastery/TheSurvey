const SurveyController = require('../../controllers/surveyController');
const express = require('express');
const router = express.Router();

// Route for testing purposes - display survey form
router.get('/add', (req, res) => {
    res.render('surveys/add');
});

router.get('/', SurveyController.getAllSurveys);

router.get('/:surveyID', SurveyController.getSurvey);

router.post('/', SurveyController.postSurvey);

router.put('/:surveyID', SurveyController.updateSurvey);

router.delete('/:surveyID', SurveyController.deleteSurvey);

module.exports = router;
