const express = require('express');
const { json, urlencoded } = require('body-parser');
const fileUpload = require('express-fileupload');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const { CONFIG } = require('./config/config');
const { ProductsRouter, UsersRouter, OrderRouter } = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(
  fileUpload({
    createParentPath: true,
    useTempFiles: true,
    tempFileDir: './tmp',
    limits: { fileSize: 1024 * 1024 * 2 }, // 2MB
  })
);

app.use(
  cors({
    origin: CONFIG.development.client.URL,
  })
);

app.use('/users', UsersRouter);
app.use('/products', ProductsRouter);
app.use('/orders', OrderRouter);

module.exports = app;
