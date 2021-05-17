const fetch = require('node-fetch')
const AuthJWT = 'http://localhost:3080'
async function AuthMiddelware(req, res, next) {
  if (!req.headers.authorization) {
    req.user = 'guest'
    return next()
  }
  const response = await fetch(`${AuthJWT}/verify`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Authorization: `${req.headers.authorization}` },
  }).then((respApi) => respApi)

  if (response.status === 200) {
    req.user = await response.json()
    return next()
  }
}
module.exports = AuthMiddelware
