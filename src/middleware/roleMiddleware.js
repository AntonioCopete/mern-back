async function adminMiddleware(req, res, next) {
    console.log(req.headers);
    if (req.headers.role === 'admin' || req.headers.role === 'employee') {
        return next();
    }
    res.status(401).send('Unauthorized');
}

async function theAdminMiddleware(req, res, next) {
    console.log(req.headers);
    if (req.headers.role === 'admin') {
        return next();
    }
    res.status(401).send('Unauthorized');
}

module.exports = {adminMiddleware, theAdminMiddleware};