const { verifyIdToken } = require('../services/firebase/firebase')

async function authMiddleware(req, res, next) {
  const { authorization } = req.headers
  console.log(req.headers)
  const token = authorization.slice(7)
  console.log(token)
  try {
    const verifiedToken = await verifyIdToken(token)
    if (verifiedToken) {
      next()
    }
  } catch (err) {
    next(err)
  }
}

module.exports = { authMiddleware }
