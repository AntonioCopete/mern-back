const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    mainImage: {
      data: Buffer,
      required: false,
      type: String,
    },
    gallery: [{
      data: [Buffer],
      required: false,
      type: [String],
    }],
    title: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      // minLength: [10, 'The description is too short'],
    },
    price: {
      type: Number,

      // minimum: 0,
      // required: true,
      set: v => (v),
      get: v => (v/100).toFixed(2),
      required: false,
    },
    stock: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
    // toJSON: { getters: true },
  }
);

const productModel = new mongoose.model('product', productSchema);

module.exports = productModel;
