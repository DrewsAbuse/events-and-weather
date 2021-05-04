const db = require('../db/DB')
const columeFor = () => {}
class NoteDAO {
  async deleteNote(noteId) {
    await db('notes')
      .where({
        id: noteId,
      })
      .del()
  }

  async createNote(NoteJson) {
    const [id] = await db('notes').insert(NoteJson).returning('id')
    return id
  }

  async getAllByHash(user_id) {
    const NoteByHash = await db
      .select('*')
      .from('notes')
      .where({ user_id: user_id })
      .then((rows) => rows)

    return NoteByHash
  }
}
module.exports = new NoteDAO()
