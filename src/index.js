const app = require('./server');
const express = require('express');
// const path = require('path');
// const ejs = require('ejs');
// const bodyParser = require('body-parser');
const { CONFIG } = require('./config/config');
const connect = require('./db/connect');
const { populateProducts } = require('./db/products/productsSeed');

connect().then(async function onServerInit() {
  CONFIG.development.logger.info(`DB connected`);
  await populateProducts();
});

// public folders
app.use(express.static('src/uploads'));





// app.set('views', path.join(__dirname, 'views'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// const multer = require('multer');

// // For multer storages
// var multerStorage = multer.diskStorage({
//   destination: function(req, file, callback) {
//     callback(null, path.join(__dirname, 'src/uploads'));
//   },
//   filename: function(req, file, callback) {
//     callback(null, Date.now() + ' ' + file.originalname);
//   }
// });

// // Base index route
// app.get('/', function(req, res) {
//   res.render('file_upload', {
//     title: 'File Upload using Multer'
//   });
// })


// port
app.listen(CONFIG.development.app.PORT, () => {
  CONFIG.development.logger.info(
    `Server running at ${CONFIG.development.app.PORT}`
  );
});
