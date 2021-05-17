const NoteService = 'http://localhost:8080/'

const fetch = require('node-fetch')

console.log('Class note init')
class Notes {
  async createNote(note) {
    try {
      const serviceRes = await fetch(`http://localhost:8080/notes`, {
        method: 'POST',
        body: JSON.stringify(note),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((respApi) => respApi.json())
        .then((respApi) => respApi)
      console.log(serviceRes)
      return serviceRes
    } catch (error) {
      console.log(error)
    }
  }

  async deleteNote(id) {
    try {
      const serviceRes = await fetch(`http://localhost:8080/notes/${id}`, {
        method: 'DELETE',

        headers: { 'Content-Type': 'application/json' },
      })
        .then((respApi) => respApi.json())
        .then((respApi) => respApi)

      return serviceRes
    } catch (error) {
      console.log(error)
    }
  }
  async fetchNoteByUser(id) {
    try {
      const serviceRes = await fetch(`http://localhost:8080/notes/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((respApi) => respApi.json())
        .then((respApi) => respApi)

      return serviceRes
    } catch (error) {
      res.status(500)
    }
  }
}

module.exports = new Notes()
