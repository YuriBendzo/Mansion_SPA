const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productScheme = new Schema({
  productTitle: String,
  productCategory: String,
  productPrice: Number,
  productImage: String, 
  productDescr: String,
})

const ProductModel = mongoose.model('Product', productScheme)

module.exports = ProductModel
