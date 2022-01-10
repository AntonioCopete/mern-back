const Router = require('express').Router;
const { authMiddleware } = require('../middleware/authMiddleware');

const { userController } = require('../controllers');

const UserRouter = Router();

UserRouter.get('/login', authMiddleware, userController.login);
UserRouter.post('/signup', authMiddleware, userController.createUser);
UserRouter.get('/', userController.getUsers);
UserRouter.get('/:userId', userController.getSingleUser);
UserRouter.post('/', userController.createUser);
UserRouter.patch('/:userId', userController.updateUser);
UserRouter.delete('/:userId', userController.deleteUser);

module.exports = UserRouter;
