const admin = require('firebase-admin');

const { CONFIG } = require('../../config/config');

admin.initializeApp({
  credential: admin.credential.cert(CONFIG.development.firebase),
});
// console.log(CONFIG.development.firebase)

const auth = admin.auth();

function verifyIdToken(token) {
  return auth.verifyIdToken(token);
}

module.exports = {
  admin: admin,
  auth: auth,
  verifyIdToken: verifyIdToken,
};
