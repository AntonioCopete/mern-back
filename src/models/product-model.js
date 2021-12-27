const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    _id: String,
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      required: false,
      minlength: [10, 'The description is too short'],
      maxlength: [255, 'The descrription is too long'],
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const productModel = new mongoose.model('product', productSchema)

module.exports = productModel
