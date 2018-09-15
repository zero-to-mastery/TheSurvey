const mongoose = require('mongoose')
const { Schema } = mongoose

// ? This creates a user schema obviously. What did you expect? duh!
const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
})

mongoose.model('user', UserSchema)
