const Router = require("express").Router;
const {
    productController
} = require('../controllers');
const ProductsRouter = Router();
const { errorMiddleware } = require('../middleware');
const {adminMiddleware} = require('../middleware/roleMiddleware');

ProductsRouter.use(errorMiddleware);
ProductsRouter.get("/", productController.getProducts);
ProductsRouter.get("/:productId", productController.getSingleProduct);
ProductsRouter.post("/", adminMiddleware, productController.createProduct);
ProductsRouter.patch("/:productId", adminMiddleware, productController.updateProduct);
ProductsRouter.delete("/:productId", adminMiddleware, productController.deleteProduct);

module.exports = ProductsRouter
