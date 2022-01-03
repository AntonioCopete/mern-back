const { log } = require('loglevel');
const db = require('../models');
// const { logger } = require("../config/config");

async function createProduct(req, res, next) {
  const product = new db.Product(req.body);
  try {
    const image = req.files.image;
    if (image) {
      const path = process.cwd() + '/src/uploads/' + image.name;
      image.mv(path, function (err) {
        if (err) res.status(500).send(err);
      });
      product.images = image.name;
    }
    // const {
    //   images,
    //   title,
    //   description,
    //   price,
    //   stock

    // } = req.body;

    // const newProduct = await db.Product.create({
    //   images: images,
    //   title: title,
    //   description: description,
    //   price: price,
    //   stock: stock
    // });
    await product.save();
    res.status(200).send({ success: true, data: product });
    // res.status(201).send({
    //   success: true,
    //   data: {
    //     newProduct
    //   },
    // });
  } catch (err) {
    next(err);
  }
}

async function getProducts(req, res, next) {
  try {
    const products = await db.Product.find().limit().lean().exec();
    res.status(200).send({
      quantity: products.length, // To check the quantity of Products within the array of Products
      data: products,
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
      data: getProduct,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

// update product and if image exists delete it from database

async function updateProduct(req, res, next) {
  try {
    const product = req.params['productId'];
    const image = req.files.image;
    if(image){
      delete('/src/uploads/' + image.name);  
      const path = process.cwd() + '/src/uploads/' + image.name;
      product.images = image.name;
      image.mv(path, function (err) {
        if (err) res.status(500).send(err);
      });
      console.log(product.images);
      console.log(image.name);
    }
    const updateItem = await db.Product.findByIdAndUpdate(
      { _id: product },
      req.body,
      { new: true }
    );
    res.status(200).send({
      message: 'Product successfully updated',
      data: updateItem,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

// const image = req.files.image;
// if (image) {
//   const path = process.cwd() + '/src/uploads/' + image.name;
//   image.mv(path, function (err) {
//     if (err) res.status(500).send(err);
//   });
//   product.images = image.name;
// }

// await product.save();
// res.status(200).send({ success: true, data: product });





// async function updateProduct(req, res, next) {
//   try {
//     const { productId: productId } = req.params;
//     const updateImage = await db.Product.findByIdAndUpdate(productId, req.body, {
//         new: true,
//       });


//       if (err) res.status(500).send(err);
//     });
//     product.images = image.name;
//     }
//     await product.save();
//     res.status(200).send({ success: true, data: product });
    // const { productId: productId } = req.params;

    // const updateItem = await db.Product.findByIdAndUpdate(productId, req.body, {
    //   new: true,
    // });
    // res.status(200).send({
    //   data: updateItem,
    // });

async function deleteProduct(req, res, next) {
  try {
    const productId = req.params['productId'];

    const updateItem = await db.Product.deleteOne({ _id: productId });

    if (updateItem.deletedCount === 1) {
      res.status(200).send({
        message: 'Product successfully deleted',
      });
    } else {
      res.status(500).send({
        message: 'Product not removed',
      });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
}

// try {
//   const image = req.files.image;
//   if (image) {
//     const path = process.cwd() + '/src/uploads/' + image.name;
//     image.mv(path, function (err) {
//       if (err) res.status(500).send(err);
//     });
//     product.images = image.name;
//   }


module.exports = {
  createProduct: createProduct,
  getProducts: getProducts,
  getSingleProduct: getSingleProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
};
