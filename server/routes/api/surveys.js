const express = require('express');
const router = express.Router();
const SurveyController = require('../../controllers/surveyController')

// Route for testing purposes - display survey form
router.get('/add', (req, res) => {
  res.render('surveys/add');
});

 // /api/surveys is default, all routes in this file start with this path
router.get('/', SurveyController.getAllSurveys);
router.get('/:surveyID', SurveyController.getSurvey);
router.post('/', SurveyController.postSurvey);
router.patch('/:surveyID', SurveyController.updateSurvey);
router.delete('/:surveyID', SurveyController.deleteSurvey);

module.exports = router;
