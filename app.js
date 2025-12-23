const express = require('express')
const cors = require('cors')
const { API_PREFIX } = require('./src/utils/env')
const cityRoutes = require('./src/routes/cityRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use(`${API_PREFIX}/cities`, cityRoutes)

app.get('/', (req, res) => {
  res.json({ status: 'ok' })
})

module.exports = app
