const app = require('./app')
const { PORT } = require('./src/utils/env')

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
