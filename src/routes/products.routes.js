const Router = require("express").Router;
const {
    productController
} = require('../controllers');

const ProductsRouter = Router();

ProductsRouter.get("/", productController.getProducts);
ProductsRouter.get("/:productId", productController.getSingleProduct);
ProductsRouter.post("/", productController.createProduct);

module.exports =  ProductsRouter;