const { Router } = require('express')
const userController = require('../Controller/userController')
const userRouter = new Router()

userRouter.post('/', userController.createUser)
userRouter.delete('/:hash', userController.deleteUser)

module.exports = userRouter
