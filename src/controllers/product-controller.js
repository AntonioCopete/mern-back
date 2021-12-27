const db = require('../models')

async function createProduct(req, res, next) {
  const product = new db.Product(req.body)

  try {
    const image = req.files.image
    if (image) {
      const path = process.cwd() + '/src/uploads/' + image.name
      image.mv(path, function (err) {
        if (err) res.status(500).send(err)
      })
      product.image = image.name
    }

    await product.save()

    res.status(200).send({ success: true, data: product })
  } catch (error) {
    next(error)
  }
}

async function getProducts(req, res, next) {
  try {
    const products = await db.Product.find({}).limit().lean().exec()
    res.status(200).send({
      quantity: products.length,
      data: products,
    })
  } catch (error) {
    next(error)
  }
}

async function getSingleProduct(req, res, next) {
  try {
    const product = await db.Product.findById(req.params.productId)
    res.type('application/json')
    res.status(200).send({ success: true, product })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getProducts,
  createProduct,
  getSingleProduct,
}
