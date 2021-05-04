const User = require('../models/UserModel')
const Role = require('../models/RoleModel')
const bcrypt = require('bcrypt')

const fetch = require('node-fetch')
const { validationResult } = require('express-validator')

class authContoller {
  async reg(req, res) {
    try {
      const validationError = validationResult(req)
      if (!validationError.isEmpty()) {
        return res.status(400).json({ message: 'Validation Error', validationError })
      }
      const { username, password } = req.body
      const candidate = await User.findOne({ username })
      if (candidate) {
        return res.status(400).json({ message: 'User already reg' })
      }
      const hashPassword = bcrypt.hashSync(password, 5)
      const userRole = await Role.findOne({ value: 'User' })
      const user = new User({ username, password: hashPassword, roles: userRole.value })
      await user.save()

      return res.status(201).json({ message: 'Successful, user created', id: user._id })
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: 'Reg ERROR' })
    }
  }
  async login(req, res) {
    try {
      const { username, password } = req.body
      const user = await User.findOne({ username })
      if (!user) {
        return res.status(400).json({ message: 'User not found' })
      }
      const validPassword = bcrypt.compareSync(password, user.password)
      if (!validPassword) {
        return res.status(400).json({ message: 'Wrong password' })
      }
      const userData = {
        id: user._id,
        username: user.username,
        role: user.roles,
      }

      return res.status(200).json({ message: 'successful', user: userData })
    } catch (error) {
      console.log(error)
    }
  }
}
module.exports = new authContoller()
