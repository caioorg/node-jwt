const port = 3003
const express = require('express')
const bodyParser = require('body-parser')
const allowCors = require('./config/cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(allowCors)

require('./app/controllers/index')(app)

app.listen(port, () => {
  console.log(`server runnig ${port}`)
})
