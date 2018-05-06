const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let surveySchema = Schema({
	name: String,
	owner: {type: Schema.Types.ObjectId, ref: 'User'},
	questions: [{type: Schema.Types.ObjectId, ref: 'Question'}]
});

let Survey = mongoose.model('Survey', surveySchema);
module.exports = {Survey};