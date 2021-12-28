const mongoose = require('mongoose')
const { CONFIG } = require('../config/config')

function connect() {
  return mongoose.connect(CONFIG.development.db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = connect
