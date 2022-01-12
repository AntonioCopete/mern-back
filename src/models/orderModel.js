const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
  userLink: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  phoneNumber: {
    type: Number,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  postCode: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  town: {
    type: String,
    required: false,
  },
  card: {
    type: String,
    required: false,
  },
  cardNumber: {
    type: String,
    required: false,
  },
  products: [{
    title: {
      type: String,
      ref: 'title',
      required: false,
    },
    quantity: {
      type: Number,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: false,
    }
  }],
  status: {
    type: String,
    enum: ['pending', 'paid', 'canceled'],
    default: 'pending',
  },
  payment: {
    type: String,
    enum: ['cash-on-delivery', 'card', 'paypal'],
    default: 'card',
  },
  paymentId: {
    type: String,
    required: false,
  },
  paymentDate: {
    type: Date,
    required: false,
  },
  shipping: {
    type: String,
    enum: ['delivered', 'pending', 'canceled'],
    default: 'pending',
  },
 });

const orderModel = new mongoose.model('order', orderSchema);

module.exports = orderModel;
