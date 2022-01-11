function adminMiddleware(req) {
    const {role} = req.header;
    try {
        if (role === 'admin') {
            return next();
        }
        return next(new Error('You are not authorized to access this page'));
    } catch (error) {
        console.log(error.message);
    }
}

function mainRoleMiddleware(req) {
    const {role} = req.header;
    try {
        if (role === 'admin' || role === 'employee') {
            return next();
        }
        return next(new Error('You are not authorized to access this page'));
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    adminMiddleware,
    mainRoleMiddleware
}