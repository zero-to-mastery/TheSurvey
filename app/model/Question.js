const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let questionSchema = Schema({
	survey: {type: Schema.Types.ObjectId, ref: 'Survey'},
	results: [{type: Schema.Types.ObjectId, ref: 'Result'}]
});

let Question = mongoose.model('Question', questionSchema);
module.exports = {Question};