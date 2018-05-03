const express = require('express');
const api = new express.Router();
const getAllQuestions = require('./getAllQuestions');
const getAllAnswers = require('./getAllAnswers');

api.get('/getAllQuestions', getAllQuestions);
api.get('/getAllAnswers', getAllAnswers);

module.exports = api;