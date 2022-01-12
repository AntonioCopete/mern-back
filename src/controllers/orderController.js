const db = require("../models");

// POST order
async function addOrder(req, res) {
  try {
    const orderProduct = req.body;
    console.log(orderProduct);
    const newOrder = await db.Order.create({
      address: orderProduct.address,        
      });
      res.status(200).send({
        message: 'Product successfully created',
        data: newOrder,
      });
      res.status(200).send({
        message: { message: "Successfully added", id: newOrder._id },
        data: newOrder,
      });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }

    // products.forEach(async (product) => {
    //   const { _id } = product;
    //   const { quantity } = product;
    //   const updatedProduct = await db.Product.findByIdAndUpdate(
    //     _id,
    //     {
    //       $inc: { stock: -quantity },
    //     },
    //     {
    //       new: true,
    //     }
    //   );
    //   console.log(updatedProduct);
    // });
}

module.exports = {
    addOrder: addOrder,
};