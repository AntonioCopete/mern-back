const db = require('../models');

// POST order
async function addOrder(req, res) {
  try {
    const { address, country, postCode, state, town } = req.body.userAddress;
    const { cardNumber, cvc, card } = req.body.userPayment;
    const { products } = req.body.cart;

    const newOrder = await db.Order.create({
      address,
      country,
      postCode,
      state,
      town,
      cardNumber,
      cvc,
      card,
      products,
    });
    res.status(201).send({
      message: 'Product successfully created',
      data: newOrder,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  addOrder: addOrder,
};
