const db = require("../models");

// POST order
async function addOrder(req, res) {
  try {
    const { products } = req.body;
    console.log(user);
    const order = await db.Order.create(req.body);
    console.log(order);

    products.forEach(async (product) => {
      const { _id } = product;
      const { quantity } = product;
      const updatedProduct = await db.Product.findByIdAndUpdate(
        _id,
        {
          $inc: { stock: -quantity },
        },
        {
          new: true,
        }
      );
      console.log(updatedProduct);
    });

    res.status(200).send({ message: "Successfully added", id: order._id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
    addOrder: addOrder,
};