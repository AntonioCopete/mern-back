const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
  },
 });

const orderModel = new mongoose.model('order', orderSchema);

module.exports = orderModel;
