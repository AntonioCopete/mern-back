const express = require("express");
const { json } = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");

const UserRouter = require("./routes/users-routes");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());

app.use("/users", UserRouter);

module.exports = app;
