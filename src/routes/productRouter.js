const Router = require("express").Router;
const {
    productController
} = require('../controllers');

const productRouter = Router();

productRouter.get("/", productController.getProducts);
productRouter.get("/:productId", productController.getSingleProduct);
productRouter.post("/", productController.createProduct);

module.exports = {
    productRouter: productRouter
};