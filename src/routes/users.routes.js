const Router = require('express').Router;
const { authMiddleware } = require('../middleware/authMiddleware');

const { userController } = require('../controllers');

const UserRouter = Router();

UserRouter.get('/login', authMiddleware, userController.login);
UserRouter.post('/signup', authMiddleware, userController.createUser);

module.exports = UserRouter;
