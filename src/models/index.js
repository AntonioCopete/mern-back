const UserModel = require('./userModel');
const productModel = require('./productModel');
const orderModel = require('./orderModel');

module.exports = {
  Product: productModel,
  User: UserModel,
  Order: orderModel
};
