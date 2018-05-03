let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb.//localhost:27017/survey_app');

mongoose.exports = {mongoose};