const Router = require("express").Router;
const {
    orderController
} = require('../controllers');
const OrderRouter = Router();
const { errorMiddleware } = require('../middleware');

OrderRouter.use(errorMiddleware);
OrderRouter.post("/", orderController.addOrder);
// OrderRouter.get("/", orderController.getProducts);
// OrderRouter.get("/:productId", orderController.getSingleProduct);
// OrderRouter.patch("/:productId", productController.updateProduct);
// OrderRouter.delete("/:productId", productController.deleteProduct);

module.exports = OrderRouter
