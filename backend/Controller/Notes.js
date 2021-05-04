const NoteService = 'http://localhost:8080/'

const fetch = require('node-fetch')

console.log('Class note init')
class Notes {
  async createNote(req, res) {
    try {
      const serviceRes = await fetch(`http://localhost:8080/notes`, {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((respApi) => respApi.json())
        .then((respApi) => respApi)

      res.status(201).json(serviceRes)
    } catch (error) {
      console.log(error)
    }
  }

  async deleteNote(req, res) {
    try {
      const serviceRes = await fetch(`http://localhost:8080/notes/${req.params.id}`, {
        method: 'DELETE',

        headers: { 'Content-Type': 'application/json' },
      })
        .then((respApi) => respApi.json())
        .then((respApi) => respApi)

      res.status(201).json(serviceRes)
    } catch (error) {
      console.log(error)
    }
  }
  async fetchNoteByUser(req, res) {
    try {
      const serviceRes = await fetch(`http://localhost:8080/notes/${req.params.userId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((respApi) => respApi.json())
        .then((respApi) => respApi)

      res.status(200).json(serviceRes)
    } catch (error) {
      res.status(500)
    }
  }
}

module.exports = new Notes()
