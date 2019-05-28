const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost/auth', { useNewUrlParser: true })

module.exports = mongoose
