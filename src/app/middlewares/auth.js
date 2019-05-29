const jwt = require('jsonwebtoken')
const secretConfig = require('../../config/auth.json')

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader)
    return res.status(401).send({ error: 'Unauthorized Authorization Token' })

  const parts = authHeader.split(' ')
  if (!parts.lenght === 2) return res.status(401).send({ error: 'Token error' })

  const [scheme, token] = parts
  if (!/^Bearer$/i.test(scheme))
    return res
      .status(401)
      .send({ error: 'Badly-informed authentication token' })

  jwt.verify(token, secretConfig.secret, (err, decoded) => {
    if (err) return res.status(401).send({ error: 'Invalid Token' })

    req.userId = decoded.params.id
    return next()
  })
}
