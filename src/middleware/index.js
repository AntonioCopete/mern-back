const { errorMiddleware } = require('./errorMiddleware');
const { authMiddleware } = require('./authMiddleware');

module.exports = {
    errorMiddleware: errorMiddleware,
    authMiddleware: authMiddleware
};