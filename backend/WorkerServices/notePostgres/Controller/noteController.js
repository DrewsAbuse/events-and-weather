const noteService = require('../Services/noteService')

class NoteController {
  async deleteNote(req, res) {
    try {
      await noteService.deleteNote(req.params.id)

      res.status(200).json({ message: 'Successful, note deleted' })
    } catch (error) {
      res.status(500)
      console.log(error)
    }
  }
  async getAllByHash(req, res) {
    try {
      const NoteByHash = await noteService.getAllByHash(req.params.hash)

      res.status(200).json({ message: 'Return All note by user_hash in array of obj', notes: NoteByHash })
    } catch (error) {
      res.status(500)
      console.log(error)
    }
  }
  async createNote(req, res) {
    try {
      const note = await noteService.createNote(req.body)

      res.status(201).json({ message: `Successful, note created id - ${note[0].id}`, note: note[0] })
    } catch (error) {
      res.status(500)
      console.log(error)
    }
  }
}
module.exports = new NoteController()
