// const { log } = require('loglevel');
const db = require('../models');
const fs = require('fs');
const { log } = require('console');
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
    const thumbnail = new Date().getTime().toString() + '-' + mainImage.name;
    const path = process.cwd() + '/src/uploads/' + thumbnail;
    if(mainImage.truncated) {
      throw new Error('The main Image file is too large');
    }
    mainImage.mv(path);
    editedProduct.mainImage = thumbnail;

  } else if(mainImage !== null && gallery.length > 1 ) {
      // Send main image to its field
      const thumbnail = new Date().getTime().toString() + '-' + mainImage.name;
      const path = process.cwd() + '/src/uploads/' + thumbnail;
      if(mainImage.truncated) {
        throw new Error('The main Image file is too large');
      }
      mainImage.mv(path);
      editedProduct.mainImage = thumbnail;

      // For multiple images
      gallery.forEach((image) => {
        const fileName = new Date().getTime().toString() + '-' + image.name;
        const savePath = process.cwd() + '/src/uploads/' + fileName;
        if(gallery.truncated) {
          throw new Error('One of the gallery images is too large. Max size is 2MB');
        }
        image.mv(savePath, function (err) {
          if(err) {
            console.log(err),
            'There was an error with one of the images'
        }else{
          console.log('File uploaded successfully');
        }
        });
        data.push(
          fileName,
      )
    });

  } else if(mainImage !== null && gallery !== null) {
    // Send main image to its field
      const thumbnail = new Date().getTime().toString() + '-' + mainImage.name;
      const path = process.cwd() + '/src/uploads/' + thumbnail;
      if(mainImage.truncated) {
        throw new Error('The main Image file is too large. Max size is 2MB');
      }
      mainImage.mv(path);
      editedProduct.mainImage = thumbnail;

        // For a single image
        const fileName = new Date().getTime().toString() + '-' + gallery.name;
        const galleryPath = process.cwd() + '/src/uploads/' + fileName;
        if(gallery.truncated) {
          throw new Error('One of the gallery images is too large. Max size is 2MB');
        }
          gallery.mv(galleryPath);
          data.push(
            fileName,
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
    next(err);
  }
}

// async function updateProduct(updatedValues, callback) {
//     console.log(updatedValues); //this output is shown below
//     const operators = {$set: {
//       mainImage: updatedValues.mainImage, gallery: updatedValues.gallery, title: updatedValues.title, description: updatedValues.description, price: updatedValues.price, stock: updatedValues.stock
//     }};
//     if (updatedValues.nickName) {
//         operators.$set.nickName = updatedValues.nickName;
//     } else {
//         operators.$unset = {nickName: 1};
//     }
//     await db.Product.findByIdAndUpdate(
//         { "_id": updatedValues.id },
//         operators,
//         { multi: false },
//     );

// };

//     if (updateItem.nModified === 1) {
//       callback(null, {
//         message: 'Product successfully updated',
//       });
//     } else {
//       callback(null, {
//         message: 'Product not updated',
//       });
//     }
//   } catch (err) {
//     callback(err);
//   }
// }

async function updateProduct(req, res, next) {
  try {
  const id = req.params['productId'];
  const editedProduct = req.body;
  const mainImage = req.files && req.files.mainImage ? req.files.mainImage : null;
  console.log(mainImage);
  const gallery = req.files && req.files.gallery ? req.files.gallery : [];
  const data = [];

  // const imageGallery = Array.isArray(gallery) ? gallery : [gallery];

  if (mainImage == null && editedProduct.mainImage == null) {
  // if (mainImage == null) {
    console.info('No main image provided');
    
    const id = req.params['productId'];
    await fs.appendFile(process.cwd() + `/src/uploads/${id}`, '', function (err) {
      if (err) throw err;
      console.log('The file has been created!');
    });


    // res.send({
    //   status: false,
    //   message: 'At least one main Image is required',
    // });
    return;
  }
  if(mainImage !== null && gallery == null) {
    const id = req.params['productId'];

    // Send main image to its field
    // Find prev image and delete
    const thumbnail = `${id}`;
    const path = process.cwd() + '/src/uploads/' + thumbnail;
    if(mainImage.truncated) {
      throw new Error('The main Image file is too large');
    }
    mainImage.mv(path);
    editedProduct.mainImage = thumbnail;

  } else if(mainImage !== null && gallery.length > 1 ) {
      // Send main image to its field
      const thumbnail = new Date().getTime().toString() + '-' + mainImage.name;
      const path = process.cwd() + '/src/uploads/' + thumbnail;
      if(mainImage.truncated) {
        throw new Error('The main Image file is too large');
      }
      mainImage.mv(path);
      editedProduct.mainImage = thumbnail;

      // For multiple images
      gallery.forEach((image) => {
        const fileName = new Date().getTime().toString() + '-' + image.name;
        const savePath = process.cwd() + '/src/uploads/' + fileName;
        if(gallery.truncated) {
          throw new Error('One of the gallery images is too large. Max size is 2MB');
        }
        image.mv(savePath, function (err) {
          if(err) {
            console.log(err),
            'There was an error with one of the images'
        }else{
          console.log('File uploaded successfully');
        }
        });
        data.push(
          fileName,
      )
    });

  } else if(mainImage !== null && gallery !== null) {
    // Send main image to its field
      const thumbnail = new Date().getTime().toString() + '-' + mainImage.name;
      const path = process.cwd() + '/src/uploads/' + thumbnail;
      if(mainImage.truncated) {
        throw new Error('The main Image file is too large. Max size is 2MB');
      }
      mainImage.mv(path);
      editedProduct.mainImage = thumbnail;

        // For a single image
        const fileName = new Date().getTime().toString() + '-' + gallery.name;
        const galleryPath = process.cwd() + '/src/uploads/' + fileName;
        if(gallery.truncated) {
          throw new Error('One of the gallery images is too large. Max size is 2MB');
        }
          gallery.mv(galleryPath);
          data.push(
            fileName,
            );
  }
   else {
    res.send({
      status: false,
      message: 'The more images you have the better positioned your product will be',
      });  
    }



    
    const updatedProduct = await db.Product.findByIdAndUpdate(
      id,
      {
        $set: { mainImage: editedProduct.mainImage},
        gallery: data,
        title: editedProduct.title,
        description: editedProduct.description,
        price: editedProduct.price,
        stock: editedProduct.stock,
      },
      {
        multi: true,
        // omitUndefined: true,
        omitNull: true,
        omit_null: true,
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
    fs.unlinkSync(process.cwd() + `/src/uploads/${productId}`);

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