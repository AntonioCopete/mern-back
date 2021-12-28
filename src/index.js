const app = require('./server')
const config = require('./config/config')
const connect = require('./db/connect')

// const { populateProducts } = require('./db/products/productsSeed')

connect().then(async function onServerInit() {
  config.logger.info(`DB connected`)

  // uncomment if you need to seed the database before
  // await populateProducts()
  app.listen(config.app.PORT, () => {
    config.logger.info(`Server running at http://localhost:${config.app.PORT}`)
  })
})
