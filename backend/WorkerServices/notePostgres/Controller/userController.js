const userService = require('../Services/userService')
class UserController {
  async deleteUser(req, res) {
    try {
      await userService.deleteUser(req.params.hash)

      res.status(200).json({ message: 'Successful, user deleted' })
    } catch (error) {
      res.status(500)
      console.log(error)
    }
  }
  async createUser(req, res) {
    try {
      const id = await userService.createUser(req.body)
      res.status(201).json({ message: `Successful, user created id -${id}` })
    } catch (error) {
      res.status(500)
      console.log(error)
    }
  }
}
module.exports = new UserController()
