const Router = require("express").Router;
const {
    productController
} = require('../controllers');

const ProductsRouter = Router();

ProductsRouter.get("/", productController.getProducts);
ProductsRouter.get("/:productId", productController.getSingleProduct);
ProductsRouter.post("/", productController.createProduct);
ProductsRouter.patch("/:productId", productController.updateProduct);
ProductsRouter.delete("/:productId", productController.deleteProduct);

module.exports =  ProductsRouter;