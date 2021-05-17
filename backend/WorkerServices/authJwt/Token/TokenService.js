const { secret } = require('../secret') // !!! "secret"
const jwt = require('jsonwebtoken')
function generateAccessToken(id, roles, username) {
  try {
    const payload = {
      id,
      roles,
      username,
    }
    return jwt.sign(payload, secret, { expiresIn: '24h' })
  } catch (error) {
    console.log(error)
  }
}

const create = async (req, res) => {
  try {
    const { id, role, username } = req.body
    console.log(id, role, username)
    const token = generateAccessToken(id, role, username)

    res.status(201).json({ token: token })
  } catch (error) {
    res.status(400).json({ verify: false, error })
    console.log(error)
  }
}
const verify = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1]

  try {
    const DecryptedJwt = await jwt.verify(token, secret)
    res.status(200).json({ verify: true, DecryptedJwt: DecryptedJwt })
  } catch (error) {
    res.status(401).json({ verify: false })
    console.log('token LOG', error)
  }
}
module.exports = { create, verify }
