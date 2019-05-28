const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const { email } = req.body
    if (await User.findOne({ email }))
      return res.status(400).send({ error: 'User already exist' })

    const user = await User.create(req.body)
    user.password = undefined

    return res.send({ user })
  } catch (err) {
    console.log(err)
    return res.status(400).send({ error: 'Failed Register User' })
  }
})

module.exports = app => app.use('/auth', router)
