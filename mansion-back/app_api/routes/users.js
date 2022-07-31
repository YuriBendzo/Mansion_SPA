const express = require('express')
const router = express.Router()

const usersController = require('../controllers/users')

/* GET список користувачів. */
router.get('/', usersController.getList)

/* POST реєстрації нового користувача. */
router.post('/signup', usersController.signup)

/* POST Вхід за даними користувача. */
router.post('/login', usersController.login)

module.exports = router