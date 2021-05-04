const fetch = require('node-fetch')
const AuthJWT = 'http://localhost:3080'
async function AuthMiddelware(req, res, next) {
  const response = await fetch(`${AuthJWT}/verify`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Authorization: `${req.headers.authorization}` },
  }).then((respApi) => respApi)

  if (response.status === 200) {
    req.user = await response.json()
    const isVerify = req.user.DecryptedJwt.id === req.params.userId || req.user.DecryptedJwt.id === req.body.userId
console.log(isVerify, req.user.DecryptedJwt.id, req.params.userId, req.body.userId )
    return isVerify ? next() : res.status(401).json({ message: '401 EROROR' })
  }
  return res.status(401).json({ message: '401 EROROR' })
}
module.exports = AuthMiddelware
