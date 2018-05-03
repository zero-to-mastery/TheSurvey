const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let resultSchema = Schema({
	question: {type: Schema.Types.ObjectId, ref: 'Question'}
});

let Result = mongoose.model('Result', resultSchema);
module.exports = {Question};