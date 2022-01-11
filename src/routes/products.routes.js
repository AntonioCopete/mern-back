const Router = require("express").Router;
const {
    productController
} = require('../controllers');
const ProductsRouter = Router();
const { errorMiddleware } = require('../middleware');
const { mainRoleMiddleware } = require('../middleware/roleMiddleware');

ProductsRouter.use(errorMiddleware);
ProductsRouter.get("/", productController.getProducts);
ProductsRouter.get("/:productId", productController.getSingleProduct);
ProductsRouter.post("/", mainRoleMiddleware, productController.createProduct);
ProductsRouter.patch("/:productId", mainRoleMiddleware, productController.updateProduct);
ProductsRouter.delete("/:productId", mainRoleMiddleware, productController.deleteProduct);

module.exports = ProductsRouter
