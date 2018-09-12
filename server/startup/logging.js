require('dotenv').config();
const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');

module.exports = function () {
    winston.handleExceptions(
        new winston.transports.Console( {colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: 'uncaughtExceptions.log'})
    );

    process.on('unhandledRejection', (ex) => {
        throw ex;
    });

    const db = process.env.MONGO_DB;
    winston.add(winston.transports.File, { filename: 'logfile.log'});
    winston.add(winston.transports.MongoDB,{
        db: db,
        level: 'info'
    });
};