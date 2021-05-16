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
  async registrationUser(input) {
    const { message, id } = await fetch(`${AuthService}/auth/reg`, {
      method: 'POST',
      body: JSON.stringify(input),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((respApi) => respApi.json())
      .then((respApiJson) => respApiJson)
    if (id) {
      return { message, id }
      NoteApiAddUser(id)
    } else {
      return { message }
    }
  }
  async loginUser(input) {
    const { user, message } = await fetch(`${AuthService}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(input),
      headers: { 'Content-Type': 'application/json' },
    }).then((respApi) => respApi.json())

    const { token } = await fetch('http://localhost:3080/create', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    }).then((respApi) => respApi.json())

    return user ? { message, id: user.id, token } : { message }
  }
}

module.exports = new Auth()
