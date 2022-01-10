const app = require('./server');
const express = require('express');
const { CONFIG } = require('./config/config');
const connect = require('./db/connect');
const { populateProducts } = require('./db/products/productsSeed');

connect().then(async function onServerInit() {
  CONFIG.development.logger.info(`DB connected`);
  await populateProducts();
});

// public folders
app.use(express.static('src/uploads'));

// port
app.listen(CONFIG.development.app.PORT, () => {
  CONFIG.development.logger.info(
    `Server running at ${CONFIG.development.app.PORT}`
  );
});
