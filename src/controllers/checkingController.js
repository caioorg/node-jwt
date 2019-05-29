const express = require('express')
const router = express.Router()
const middleAuth = require('../middlewares/auth')

router.use(middleAuth)

router.get('/', (req, res) => {
  return res.send({ user: req.userId })
})

module.exports = app => app.use('/checking', router)
