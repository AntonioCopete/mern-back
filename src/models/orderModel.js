const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
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
    required: true,
  },
  town: {
    type: String,
    required: true,
  },
  card: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  products: [
    {
      title: {
        type: String,
        ref: 'title',
        required: true,
      },
      quantity: {
        type: Number,
        required: false,
      },
      price: {
        type: Number,
        required: true,
      },
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: false,
      },
    },
  ],
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
