const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		minlength: 1,
		maxlength: 30,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
        minlength: 6,
        maxlength: 64,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
