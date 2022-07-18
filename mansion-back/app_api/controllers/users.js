const UsersModel = require('../models/user')
const { prepareToken } = require('../utils/token')
const { body, validationResult, check } = require('express-validator');

const sendJSONResponse = (res, status, content) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.status(status).json(content)
}

module.exports.getList = function (req, res) {
  UsersModel.find({})
    .select('_id name isAdmin')
    .exec(function (err, users) {
      if (err)
        return sendJSONResponse(res, 500, {
          success: false,
          err: { msg: 'Fetch faild!' },
        })

      sendJSONResponse(res, 200, { success: true, data: users })
    })
}

module.exports.signup = [
  body('name').isLength({ min: 2}).withMessage('імя повинно бути довшим'),
  body('email').isEmail().withMessage('Введіть дійсну пошту'),
  body('password').isLength({ min: 5 }).withMessage('Пароль повинен бути складнішим'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('errors------');
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }
    next()
  },
  function (req, res) {
  let user = new UsersModel({
    email: req.body.email,
    name: req.body.name,
    isAdmin: req.body.isAdmin,
  })
  user.setPassword(req.body.password)
  user
    .save()
    .then((user) => {
      const token = prepareToken(
        {
          id: user._id,
          isAdmin: user.isAdmin,
          name: user.name,
        },
        req.headers
      )
      return res.status(200).json({
        result: 'Signuped successfully',
        token,
      })
    })
    .catch((err) => {
      console.log('err-----------');
      console.log(err);
      return res.status(500).json({ error: 'Signup error' })
    })
}]

module.exports.login = function (req, res) {
  if (!req.body.email) {
    return res.status(401).json({ error: 'Email is required' })
  }
  if (!req.body.password) {
    return res.status(401).json({ error: 'Password is required' })
  }
  UsersModel.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: 'Login or password error' })
      }
      if (!user.validPassword(req.body.password)) {
        return res.status(401).json({ error: 'Login or password error' })
      }
      const token = prepareToken(
        {
          id: user._id,
          name: user.name,
          isAdmin: user.isAdmin,
        },
        req.headers
      )
      const expiresAt = new Date().getTime() + 36000000
      res.status(200).json({
        result: 'Authorized',
        user: {
          authData: {
            name: user._doc.name,
            isAdmin: user.isAdmin,
            access_token: token,
          },
          expiresAt,
        },
      })
    })
    .catch((err) => {
      return res.status(401).json({ error: 'Login error' })
    })
}