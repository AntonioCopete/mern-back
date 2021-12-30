const { seedProducts } = require('./productMock');
const db = require('../../models');

async function populateProducts() {
  const products = await seedProducts();

  await db.Product.deleteMany({});
  await db.Product.create([...products]);
}

module.exports = {
  populateProducts: populateProducts,
};
