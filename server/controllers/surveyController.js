const mongoose = require("mongoose");
require('../models/Surveys');
const Survey = mongoose.model('surveys');
const Joi = require('joi');

function validateSurvey(survey) {
    const schema = {
        title: Joi.string().min(3).max(255).required(),
        question: Joi.string().min(3).max(255).required(),
        answer: Joi.string().min(3).max(255).required(),
    };
    return Joi.validate(survey, schema)
}

module.exports = {
    getAllSurveys(req, res) {
        Survey.find({})
            .sort({date: 'desc'})
            .then(surveys => {
               res.render('surveys/index', {
                   surveys: surveys
               });
            });
        // res.json({msg: 'get all surveys'}
    },

    getSurvey(req, res) {
        res.json({msg: `get specific survey (${req.params.surveyID})`})
    },

    postSurvey(req, res) {
        let errors = [];

        const { error } = validateSurvey(req.body);
        if (error)
            return res.status(400).send(error.details[0].message);

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
            };
            new Survey(newSurvey)
                .save()
                .then(surveys => {
                    res.redirect('/surveys');
                });
        }
        // res.json({msg: 'post new survey'})
    },

    updateSurvey(req, res) {
        res.json({msg: `update existing survey (${req.params.surveyID})`})
    },

    deleteSurvey(req, res) {
        res.json({msg: `delete existing survey (${req.params.surveyID})`})
    }
}
