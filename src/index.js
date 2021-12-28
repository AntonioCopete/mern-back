const app = require('./server')
const { CONFIG } = require('./config/config')
const connect = require('./db/connect')

const { populateProducts } = require('./db/products/productsSeed')

connect().then(async function onServerInit() {
  CONFIG.development.logger.info(`DB connected`)

  // uncomment if you need to seed the database before
  await populateProducts()

  app.listen(CONFIG.development.app.PORT, () => {
    CONFIG.development.logger.info(
      `Server running at http://localhost:${CONFIG.development.app.PORT}`
    )
  })
})
