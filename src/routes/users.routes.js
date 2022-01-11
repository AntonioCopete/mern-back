const Router = require('express').Router;
const { authMiddleware } = require('../middleware/authMiddleware');
const { adminMiddleware } = require('../middleware/roleMiddleware');

const { userController } = require('../controllers');

const UserRouter = Router();

UserRouter.get('/login', authMiddleware, userController.login);
UserRouter.post('/signup', authMiddleware, userController.createUser);
UserRouter.get('/', userController.getUsers);
UserRouter.get('/:userId', adminMiddleware, userController.getSingleUser);
UserRouter.post('/', adminMiddleware, userController.createUser);
UserRouter.patch('/:userId', adminMiddleware, userController.updateUser);
UserRouter.delete('/:userId', adminMiddleware, userController.deleteUser);

module.exports = UserRouter;
