const userDAO = require('../DAO/userDAO')
class UserService {
  deleteUser(hashId) {
    return userDAO.deleteUser(hashId)
  }
  createUser(userDTO) {
    const { hashId } = userDTO
    return userDAO.createUser(hashId)
  }
}
module.exports = new UserService()
