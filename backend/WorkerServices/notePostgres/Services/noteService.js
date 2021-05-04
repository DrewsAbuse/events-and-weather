const noteDAO = require('../DAO/noteDAO')

class NoteService {
  getAllByHash(user_hash) {
    return noteDAO.getAllByHash(user_hash)
  }
  deleteNote(id) {
    return noteDAO.deleteNote(id)
  }
  createNote(NoteDTO) {
    return noteDAO.createNote(NoteDTO)
  }
}
module.exports = new NoteService()
