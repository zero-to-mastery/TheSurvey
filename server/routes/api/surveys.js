const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

 // /api/surveys is default, all routes in this file start with this path
// router.get('/', (req, res) => res.json({msg: 'get all surveys'}))
// router.get('/:surveyID', (req, res) => res.json({msg: `get specific survey (${req.params.surveyID})`}))
// router.post('/', (req, res) => res.json({msg: 'post new survey'}))
router.patch('/:surveyID', (req, res) => res.json({msg: `update existing survey (${req.params.surveyID})`}))
router.delete('/:surveyID', (req, res) => res.json({msg: `delete existing survey (${req.params.surveyID})`}))

//Load Survey Model
    require('../../models/Surveys');
    const Survey = mongoose.model('surveys');

//Show all Surveys Route
router.get('/', (req, res) => {
    Survey.find({})
        .sort({date: 'desc'})
        .then(surveys => {
           res.render('surveys/index', {
               surveys: surveys
           }); 
        });
});

//Add Survey Form Route
router.get('/add', (req, res) => {
    res.render('surveys/add');
});

//Process Survey Form
router.post('/', (req, res) => {
    let errors = [];
    
    if(!req.body.title) {
        errors.push({text: 'Please add a title'});
    }
    if(!req.body.question) {
        errors.push({text: 'Please add the Question for this title'});
    }
    
    if(errors.length > 0) {
        res.render('surveys/add', {
            errors: errors,
            title: req.body.title,
            question: req.body.question,
            answer: req.body.answer
        });
    } else {
        const newSurvey = {
            title: req.body.title,
            question: req.body.question,
            answer: req.body.answer
        }
        new Survey(newSurvey)
            .save() 
            .then(surveys => {
                res.redirect('/surveys');
            })
    }
});

module.exports = router;
