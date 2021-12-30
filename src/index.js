const app = require('./server');
const { CONFIG } = require('./config/config');
const connect = require('./db/connect');
const express = require('express');
const { populateProducts } = require('./db/products/productsSeed');

connect().then(async function onServerInit() {
  CONFIG.development.logger.info(`DB connected`);

  // uncomment if you need to seed the database before
  await populateProducts();

  app.listen(CONFIG.development.app.PORT, () => {
    CONFIG.development.logger.info(
      `Server running at http://localhost:${CONFIG.development.app.PORT}`
    );
  });
});

// Set Public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));
