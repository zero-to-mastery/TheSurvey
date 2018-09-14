const winston = require('winston')
const morgan = require('morgan')
const express = require('express')
const app = express()
require('dotenv').config()

require('./startup/logging')()
require('./startup/routes')(app)
require('./startup/db')()

app.use(express.urlencoded({ extended: true }))
app.use(morgan('combined'))

const PORT = process.env.PORT || 3005
const server = app.listen(PORT, () =>
	winston.info(`Listening on port ${PORT}...`)
)

module.exports = server
