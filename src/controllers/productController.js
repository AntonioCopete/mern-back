const db = require("../models");
const {
  logger
} = require("../config/config");


async function createProduct(req, res, next) {

  try {
    const {
      title,
      description,
      price,
      stock

    } = req.body;

    const newProduct = await db.Product.create({
      title: title,
      description: description,
      price: price,
      stock: stock
    });

    res.status(201).send({
      success: true,
      data: {
        newProduct
      },
    });
  } catch (err) {
    next(err);
  }
}

async function getProducts(req, res, next) {
  try {
    const products = await db.Product.find().limit().lean().exec();
    res.status(200).send({
      quantity: products.length, // To check the quantity of Products within the array of Products
      data: products
    });
  } catch (err) {
    next(err);
  }
}

async function getSingleProduct(req, res, next) {
  try {
    const ProductId = req.params['ProductId'];
    // console.log(ProductId);
    // const data = req.body;

    const getProduct = await db.Product.findOne({
        _id: ProductId,
      })
      .select({
        title: 1,
        price: 1,
        description: 1,
        stock: 1
      })
      .lean().exec();
    res.status(200).send({
      data: getProduct
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

module.exports = {
  createProduct: createProduct,
  getProducts: getProducts,
  getSingleProduct: getSingleProduct,
};