const Router = require("express").Router;

const userController = require("../controllers/user-controller");

const UserRouter = Router();

UserRouter.get("/login", userController.login);
UserRouter.post("/signup", userController.createUser);

module.exports = UserRouter;
