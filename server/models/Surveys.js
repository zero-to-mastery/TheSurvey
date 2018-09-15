const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SurveySchema = new Schema({
    surveyId: { type: ObjectId },
    title: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true
    },
    question: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true
    },
    answer: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const Survey = mongoose.model('surveys', SurveySchema);

module.exports = Survey;