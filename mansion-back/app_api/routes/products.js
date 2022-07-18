var express = require('express')
var router = express.Router()

const productsController = require('../controllers/products')

/* GET список книг. */
router.get('/', productsController.getList)

/* GET видалення книги за id. */
router.delete('/delete', productsController.delete)

/* POST Створення нової книги. */
router.post('/add', productsController.add)

// Оновлення інформації про книгу після редагування
router.put('/update', productsController.update)

/* Відображення інформації про одну книгу */
router.get('/:id', productsController.getById)

module.exports = router
