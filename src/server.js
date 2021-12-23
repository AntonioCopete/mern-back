const express = require("express");
const { json } = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const config = require("./config/config");

const { productRouter } = require('./routes');

const app = express();

app.use(json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors({
  origin: config.client.URL
}));

app.get("/", (req, res) => {
  res.status(200).send({
    data: "Ecommerce is live",
  });
});

app.use('/products', productRouter);

module.exports = app;
