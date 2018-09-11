const winston = require('winston');
require('express-async-errors');
require('dotenv').config();

module.exports = function () {
    winston.handleExceptions(
        new winston.transports.Console( {colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: 'uncaughtExceptions.log'})
    );

    process.on('unhandledRejection', (ex) => {
        throw ex;
    });

    winston.add(winston.transports.File, { filename: 'logfile.log'});
};