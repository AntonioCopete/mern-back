const db = require('../models')

async function getProducts(req, res, next) {
  try {
    const products = await db.Product.find({})
    res.status(200).send({
      data: products,
    })
  } catch (error) {
    next(eror)
  }
}

async function createProduct(req, res, next) {
  const { title, description, price, stock } = req.body
  try {
    const product = await db.Product.create({
      title: title,
      description: description,
      price: price,
      stock: stock,
    })

    res.status(200).send({ success: true, data: product })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getProducts,
  createProduct,
}
