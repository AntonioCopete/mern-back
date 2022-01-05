const { log } = require('loglevel');
const db = require('../models');
// const { logger } = require("../config/config");

async function createProduct(req, res, next) {
  const product = new db.Product(req.body);
  try {
    const images = req.files.images;
    if (images) {
      const path = process.cwd() + '/src/uploads/' + images.name;
      images.mv(path, function (err) {
        if (err) res.status(500).send(err);
      });
      product.images = images.name;
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


// try {
//   const images = req.files.images;
//   if (images) {
//     const path = process.cwd() + '/src/uploads/' + images.name;
//     images.mv(path, function (err) {
//       if (err) res.status(500).send(err);
//     });
//     product.images = images.name;
//   }


async function updateProduct(req, res, next) {
    try {
      const id = req.params['productId'];
      const editedProduct = req.body;
      const images = [];
      req.files.images.forEach((image) => {
        const path = process.cwd() + '/src/uploads/' + image.name;
        image.mv(path, function (err) {
          if (err) res.status(500).send(err);
        });
        images.push({
          name: image.name,
        });
        editedProduct.images = image.name;
      });
      const updateItem = await db.Product.findByIdAndUpdate(id, editedProduct);
      // const updatedProduct = await db.Product.findByIdAndUpdate(
      //   id,
      //   {
      //     images: editedProduct.images,
      //     title: editedProduct.title,
      //     description: editedProduct.description,
      //     price: editedProduct.price,
      //     stock: editedProduct.stock,
      //   },
      //   {
      //     new: true,
      //   },
      // );
      res.status(200).send({
        message: 'Product successfully updated',
        data: updateItem
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  //     console.log("Received edited product --> ", editedProduct);
  //     const updatedProduct = await db.Product.findByIdAndUpdate(
  //       id,
  //       {
  //         images: editedProduct.images,
  //         title: editedProduct.title,
  //         description: editedProduct.description,
  //         price: editedProduct.price,
  //         stock: editedProduct.stock,
  //       },
  //       {
  //         new: true,
  //       },
  //     );
  //     res.status(200).send({
  //       message: "Successfully updated",
  //       updatedProduct: updatedProduct,
  //     });
  //   } catch (error) {
  //     res.status(500).send({ error: error.message });
  //     next(error);
  //   }
  // }




// async function updateProduct(req, res, next) {
//   try {
//     let newProduct = req.body;

//     if (req.file) {
//       newProduct.images = req.file.filename;
//     } else {
//       let oldProduct = await db.Product.findById(req.params.productId);
//       newProduct.images = oldProduct.images;
//     }

//     let product = await db.Product.findOneAndUpdate(
//       { _id: req.params.productId },
//       newProduct,
//       {
//         new: true,
//       }
//     );

//     res.status(200).send({ data: product });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// }

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