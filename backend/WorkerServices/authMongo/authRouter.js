const { Router } = require('express')
const controller = require('./Controller/authController')
const { check } = require('express-validator')
const router = new Router()

router.post(
  '/reg',
  [
    check('username', 'Username cant be empty').notEmpty(),
    check('password', 'Password required 4 < password < 10').isLength({
      min: 4,
      max: 10,
    }),
  ],
  controller.reg
)
router.post('/login', controller.login)

module.exports = router
