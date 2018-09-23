const mongoose = require('mongoose');
const Survey = require('../../models/Surveys')
mongoose.set('useCreateIndex', true);

const surveyOneID = mongoose.Types.ObjectId();
const surveyTwoID = mongoose.Types.ObjectId();

const surveys = [{
    "_id": surveyOneID,
    "title": "Title 1",
    "question": "Question 1",
    "answer": "Answer 1"
  },
  {
    "_id": surveyTwoID,
    "title": "Title 2",
    "question": "Question 2",
    "answer": "Answer 2"
  }
]

const populateSurveys = done => {
  Survey.deleteMany().then(() => {
    const surveyOne = new Survey(surveys[0]).save();
    const surveyTwo = new Survey(surveys[1]).save();
    return Promise.all([surveyOne, surveyTwo])
  }).then(() => done())
    .catch(err => console.log(err));
};


module.exports = {surveys, populateSurveys};
