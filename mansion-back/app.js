const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const productsRouter = require('./app_api/routes/products');
const usersRouter = require('./app_api/routes/users');

const app = express();

require('dotenv').config();
require('./db');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

// перевірка авторизації користувача -------
const { parseBearer } = require('./app_api/utils/token')

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )
  next()
})

app.use((req, res, next) => {
  console.log('req.path')
  console.log(req.path)
  const openPathes = ['/users/login', '/users/signup', '/products']
  if (!openPathes.includes(req.path)) {
    try {
      console.log('req.headers.authorization')
      console.log(req.headers.authorization)

      req.user = parseBearer(req.headers.authorization, req.headers)
    } catch (err) {
      return res.status(401).json({ result: 'Access Denied' })
    }
  }
  next()
})
// --------------

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
