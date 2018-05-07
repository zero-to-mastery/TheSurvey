const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

let userSchema = Schema({
	name: String,
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		validate: {
			validator: validator.isEmail,
			message: '{VALUE} is not a valid email.'
		}
	},
	password: {type: String, required: true, minlength: 6},
	//too be used for authenication/security
	tokens: [{
		access: {type: String, required: true},
		token: {type: String, required: true}
	}],
	surveys: [{type: Schema.Types.ObjectId, ref: 'Survey'}]
});
  
module.exports = mongoose.model('User', userSchema);
