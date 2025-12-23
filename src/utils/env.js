const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || '3000'
const API_PREFIX = process.env.API_PREFIX || '/api'
const NODE_ENV = process.env.NODE_ENV || 'development'
const isProduction = NODE_ENV === 'production'
module.exports = { PORT, API_PREFIX, NODE_ENV, isProduction }
