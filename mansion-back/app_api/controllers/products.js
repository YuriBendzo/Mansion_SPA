const formidable = require('formidable')
const ProductModel = require('../models/product')
const fs = require('fs')

const sendJSONResponse = (res, status, content) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.status(status).json(content)
}
// Get products
module.exports.getList = function (req, res) {
  const searchObj = req.query.searchParams || {}

  ProductModel.find(searchObj, function (err, products) {
      if (err)
        return sendJSONResponse(res, 500, {
          success: false,
          err: { msg: 'Fetch faild!' },
        })

      sendJSONResponse(res, 200, { success: true, data: products })
    })
}

// Add new product
module.exports.add = function (req, res, next) {
    let product = new ProductModel({
      productTitle: req.body.productTitle,
      productCategory: req.body.productCategory,
      productDescr: req.body.productDescr,
      productPrice: parseFloat(req.body.productPrice),
      productImage: req.body.productImage,
    })
    product.save(function (err, savedProduct) {
      if (err) {
        sendJSONResponse(res, 500, {
          success: false,
          err: { msg: 'Saving faild!' },
        })
        return
      }
      sendJSONResponse(res, 201, { success: true, data: savedProduct })
    })
}
// Delete product
module.exports.delete = function (req, res) {
    ProductModel.findByIdAndDelete(req.body.id, function (err) {
      if (err) {
        sendJSONResponse(res, 500, {
          success: false,
          err: { msg: 'Delete faild!' },
        })
        return
      }
      sendJSONResponse(res, 200, { success: true })
    })
}
// Update product
module.exports.update = function (req, res, next) {
    console.log('- updat ---------')
    console.log(req.body)
    let product = {
        productTitle: req.body.productTitle,
        productCategory: req.body.productCategory,
        productDescr: req.body.productDescr,
        productPrice: parseFloat(req.body.productPrice),
        productImage: req.body.productImage,
    }
    if (req.body.productImage) {
      //If a new photo is sent, then we change the photo field
      product.productImage = req.body.productImage
    }
    ProductModel.findByIdAndUpdate(
      req.body._id,
      product,
      { new: true }, //the updated document is sent to the callback
      function (err) {
        // mongoose.disconnect()
        if (err) {
          sendJSONResponse(res, 500, {
            success: false,
            err: { msg: 'Update faild!' },
          })
          return
        }

        sendJSONResponse(res, 200, { success: true })
      }
    )
}

module.exports.getById = function (req, res) {
    //Search for the product object by id
    ProductModel.findById(req.params.id, function (err, searchProduct) {
        if (err) {
          sendJSONResponse(res, 500, {
            success: false,
            err: { msg: 'Find product faild!' },
          })
          return
        }
        sendJSONResponse(res, 200, { success: true, data: searchProduct })
      })
  }