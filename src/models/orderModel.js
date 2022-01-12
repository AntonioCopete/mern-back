const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
  userLink: {
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
  country: {
    type: String,
    required: true,
  },
  postCode: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: false,
  },
  town: {
    type: String,
    required: false,
  },
  products: [{
    title: {
      type: String,
      ref: 'title',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
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
    enum: ['delivered', 'peding', 'canceled'],
    default: 'pending',
  },
 });

const orderModel = new mongoose.model('order', orderSchema);

module.exports = orderModel;
