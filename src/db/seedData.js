// const db = require("../models");

function seedProducts() {
  return [{
      title: "AirPods (3rd generation)",
      description: "It´s magic, remastered",
      price: 169,
      stock: 100,
    },
    {
      title: "AirPods (3rd generation)",
      description: "It´s magic, remastered",
      price: 169,
      stock: 100,
    },
    {
      title: "AirPods (3rd generation)",
      description: "It´s magic, remastered",
      price: 169,
      stock: 100,
    },
    {
      title: "AirPods (3rd generation)",
      description: "It´s magic, remastered",
      price: 169,
      stock: 100,
    },
  ];
}

module.exports = {
  seedProducts: seedProducts,
};