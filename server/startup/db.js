require('dotenv').config();
const mongoose = require('mongoose');
const winston = require('winston');

module.exports = function() {
    const db = process.env.MONGO_DB;
    mongoose.connect(db)
        .then(() => winston.info(`Connected to ${db}...`));
};