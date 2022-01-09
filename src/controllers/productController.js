const { log } = require('loglevel');
const db = require('../models');
// const { logger } = require("../config/config");

async function createProduct(req, res, next) {
  try {
    const editedProduct = req.body;
    const mainImage = req.files.mainImage;
    const gallery = req.files.gallery;
    const data = [];


    if (mainImage == null) {
    res.send({
      status: false,
      message: 'At least one main Image is required',
    });
  }
    else if(mainImage !== null && gallery == null) {
    // Send main image to its field
    const path = process.cwd() + '/src/uploads/' + mainImage.name;
    mainImage.mv(path);
    editedProduct.mainImage = mainImage.name;

  } else if(mainImage !== null && gallery.length > 1 ) {
      // Send main image to its field
      const path = process.cwd() + '/src/uploads/' + mainImage.name;
      mainImage.mv(path);
      editedProduct.mainImage = mainImage.name;

      // For multiple images
      gallery.forEach((image) => {
        const savePath = process.cwd() + '/src/uploads/' + image.name;
        image.mv(savePath, function (err) {
          if(err) {
            console.log(err),
            'Remember to at least provide two images at the gallery'
        }else{
          console.log('File uploaded successfully');
        }
        });
        data.push(
          image.name,
      )
    });

  } else if(mainImage !== null && gallery !== null) {
    // Send main image to its field
      const path = process.cwd() + '/src/uploads/' + mainImage.name;
      mainImage.mv(path);
      editedProduct.mainImage = mainImage.name;

        // For a single image

        const galleryPath = process.cwd() + '/src/uploads/' + gallery.name;
          gallery.mv(galleryPath);
          data.push(
            gallery.name,
            );
    } else {
      res.send({
        status: false,
        message: 'Remember to at least provide two images at the gallery',
      });  
    }
    

    const newProduct = await db.Product.create(
      {
        mainImage: editedProduct.mainImage,
        gallery: data,
        title: editedProduct.title,
        description: editedProduct.description,
        price: editedProduct.price,
        stock: editedProduct.stock,
      },
    );
    res.status(200).send({
      message: 'Product successfully created',
      data: newProduct
    });
  } catch (err) {
    console.log(err);
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

async function updateProduct(req, res, next) {
  try {
  const id = req.params['productId'];
  const editedProduct = req.body;
  const mainImage = req.files.mainImage;
  const gallery = req.files.gallery;
  const data = [];

  if (mainImage == null) {
    res.send({
      status: false,
      message: 'At least one main Image is required',
    });
  }
    else if(mainImage !== null && gallery == null) {
    // Send main image to its field
    const path = process.cwd() + '/src/uploads/' + mainImage.name;
    mainImage.mv(path);
    editedProduct.mainImage = mainImage.name;

  } else if(mainImage !== null && gallery.length > 1 ) {
      // Send main image to its field
      const path = process.cwd() + '/src/uploads/' + mainImage.name;
      mainImage.mv(path);
      editedProduct.mainImage = mainImage.name;

      // For multiple images
      gallery.forEach((image) => {
        const savePath = process.cwd() + '/src/uploads/' + image.name;
        image.mv(savePath, function (err) {
          if(err) {
            console.log(err),
            'Remember to at least provide two images at the gallery'
        }else{
          console.log('File uploaded successfully');
        }
        });
        data.push(
          image.name,
      )
    });

  } else if(mainImage !== null && gallery !== null) {
    // Send main image to its field
      const path = process.cwd() + '/src/uploads/' + mainImage.name;
      mainImage.mv(path);
      editedProduct.mainImage = mainImage.name;

        // For a single image

        const galleryPath = process.cwd() + '/src/uploads/' + gallery.name;
          gallery.mv(galleryPath);
          data.push(
            gallery.name,
            );
    } else {
      res.send({
        status: false,
        message: 'Remember to at least provide two images at the gallery',
      });  
    }
    const updatedProduct = await db.Product.findByIdAndUpdate(
      id,
      {
        mainImage: editedProduct.mainImage,
        gallery: data,
        title: editedProduct.title,
        description: editedProduct.description,
        price: editedProduct.price,
        stock: editedProduct.stock,
      },
      {
        new: true,
      },
    );
    res.status(200).send({
      message: 'Product successfully updated',
      data: updatedProduct
    });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }


async function deleteProduct(req, res, next) {
  try {
    const productId = req.params['productId'];

    const updateItem = await db.Product.deleteOne(
      { _id: productId },
      { w: "majority", wtimeout: 100 },
      );

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


module.exports = {
  createProduct: createProduct,
  getProducts: getProducts,
  getSingleProduct: getSingleProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
};