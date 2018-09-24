require('dotenv').config();
const mongoose = require('mongoose');
const winston = require('winston');

module.exports = function() {
    const db = process.env.MONGO_DB;
    mongoose.connect(db, {useNewUrlParser: true})
        .then(() => winston.info(`Connected to ${db}...`));
    // Due to MongoDB driver deprecations:
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);
};
