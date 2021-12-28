const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  images: {
    main: {
      type: String,
      required: [true, "At least one image must be provided"],
    },
    others: {
      type: [String]
    },
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: false,
    minLength: [10, 'The description is too short'],
  },
  price: {
    type: Number,
    minimum: 0,
    required: true,
    // get: v => (v/100).toFixed(2),
    // set: v => v*100
  },
  stock: {
    type: Number,
    required: true,
  },
//   color: [{
//     type: String,
//     image: String
//   }],
}, {
  timestamps: true,
  toJSON: { getters: true }
}, );

const productModel = new mongoose.model("product", productSchema);

module.exports = productModel;