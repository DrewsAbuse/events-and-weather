const AuthService = 'http://localhost:1337'
const NoteService = 'http://localhost:8080'
const fetch = require('node-fetch')

const NoteApiAddUser = (id) => {
  return fetch(`${NoteService}/user/`, {
    method: 'POST',
    body: JSON.stringify({ hashId: `${id}` }),
    headers: { 'Content-Type': 'application/json' },
  })
}
class Auth {
  async registrationUser(req, res) {
    const serviceRes = await fetch(`${AuthService}/auth/reg`, {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((respApi) => respApi.json())
      .then((respApiJson) => respApiJson)
    if (serviceRes.id) {
      res.status(201).json(serviceRes)
      NoteApiAddUser(serviceRes.id)
    } else {
      res.status(400).json(serviceRes)
    }
  }
  async loginUser(req, res) {
    const {user} = await fetch(`${AuthService}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((respApi) => respApi.json())
      

    const { token } = await fetch('http://localhost:3080/create', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    }).then((respApi) => respApi.json())
    res.json({ id: user.id, token })
  }
}

module.exports = new Auth()
