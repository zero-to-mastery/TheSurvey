/*This is is the schema for user created surveys*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//Create Schema
const surveySchema = new Schema({
    surveyId: { type: ObjectId },
    title: {
        type: String,
        require: true
    },
    question: {
        type: String,
        require: true
    },
    answer: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

mongoose.model('surveys', surveySchema);