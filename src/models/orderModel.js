const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: true,
  },
  products: [{
    type: [String],
    ref: 'Product',
    required: false,
  }],
  quantity: [{
    type: [Number],
    required: false,
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
    enum: ['delivered', 'peding', 'canceled'],
    default: 'pending',
  },
 });

const orderModel = new mongoose.model('order', orderSchema);

module.exports = orderModel;
