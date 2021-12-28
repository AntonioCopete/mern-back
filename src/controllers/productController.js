const db = require("../models");
// const { logger } = require("../config/config");


async function createProduct(req, res, next) {

  try {
    const {
      images,
      title,
      description,
      price,
      stock

    } = req.body;

    const newProduct = await db.Product.create({
      images: images,
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
    const { productId: productId } = req.params;

    const getProduct = await db.Product.findById({ _id: productId }).lean();
    res.status(200).send({
      data: getProduct
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function updateProduct(req, res, next) {
  try {
    const { productId: productId } = req.params;

    const updateItem = await db.Product.findByIdAndUpdate(productId, req.body, { 
      new: true,
    });
    res.status(200).send({
      data: updateItem
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function deleteProduct(req, res, next) {
  try {
    const productId = req.params['productId'];

    const updateItem = await db.Product.deleteOne({ _id: productId });

    if(updateItem.deletedCount === 1){
    res.status(200).send({
      data: "Product successfully deleted",
    });
  } else {
    res.status(500).send({
      error: 'Product not removed',
    });
  }
  } catch (err) {
    console.log(err);
    next(err);
  }
}

module.exports = {
  createProduct: createProduct,
  getProducts: getProducts,
  getSingleProduct: getSingleProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
};