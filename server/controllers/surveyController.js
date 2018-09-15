const Survey = require('../models/Surveys');
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
    index: async (req, res) => {
        const surveys = await Survey.find().sort('name');
        res.send(surveys);
    },

    view: async (req, res) => {
        const survey = await Survey.findById(req.params.id);
        if (!survey) return res.status(404).send('No survey was found!');
        res.send(survey);
    },

    create: async (req, res) => {
        const { error } = validateSurvey(req.body);
        if (error)
            return res.status(400).send(error.details[0].message);

        const duplicate = await Survey.findOne({ title: req.body.title});
        if (duplicate)
            return res.status(400).send('Survey already exists');

        const survey = new Survey({
            title: req.body.title,
            question: req.body.question,
            answer: req.body.answer,
        });
        await survey.save();
        res.send(survey)
    },

    update: async (req, res) => {
        const { error } = validateSurvey(req.body);
        if (error)
            return res.status(400).send(error.details[0].message);

        const survey = await Survey.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            question: req.body.question,
            answer: req.body.answer,
        }, { new: true });

        if (!survey) return res.status(404).send('The survey with the given ID was not found.');
        res.send(survey);
    },

    delete: async (req, res) => {
        const survey = await Survey.findOneAndDelete(req.params.id);
        if (!survey) return res.status(404).send('The survey with the given ID was not found.');
        res.send(survey);
    },
};
