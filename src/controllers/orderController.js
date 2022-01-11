const db = require("../models");

// POST order
async function addOrder(req, res) {
  try {
    const { user } = req.body;
    console.log(user);
    const order = await db.Order.create({ _id: user });
    console.log(order);

    res.status(200).send({ message: "Successfully added", id: order._id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
    addOrder: addOrder,
};