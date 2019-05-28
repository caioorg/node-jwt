const port = 3003
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./controllers/authController')(app)

app.listen(port, () => {
  console.log(`server runnig ${port}`)
})
