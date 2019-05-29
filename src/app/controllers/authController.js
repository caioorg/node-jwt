const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/user')
const secretConfig = require('../../config/auth.json')
const router = express.Router()

const generateToken = params => {
  return jwt.sign({ params }, secretConfig.secret, {
    expiresIn: 86400
  })
}

router.post('/register', async (req, res) => {
  try {
    const { email } = req.body
    if (await User.findOne({ email }))
      return res.status(400).send({ error: 'User already exist' })

    const user = await User.create(req.body)
    user.password = undefined

    return res.send({ user, token: generateToken({ id: user.id }) })
  } catch (err) {
    return res.status(400).send({ error: 'Failed Register User' })
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email }).select('+password')

  if (!user) return res.status(400).send({ error: 'User not found' })

  if (!(await bcrypt.compare(password, user.password)))
    return res.status(400).send({ error: 'Invalid Password!' })

  user.password = undefined

  res.send({ user, token: generateToken({ id: user.id }) })
})

module.exports = app => app.use('/auth', router)
