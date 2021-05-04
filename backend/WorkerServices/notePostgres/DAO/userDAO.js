const db = require('../db/DB')

class UserDAO {
  async deleteUser(hashId) {
    await db('users')
      .where({
        hash_id: hashId,
      })
      .del()
  }
  async createUser(hashId) {
    const [hash_id] = await db('users')
      .insert({
        hash_id: hashId,
      })
      .returning('hash_id')

    return hash_id
  }
}
module.exports = new UserDAO()
