const mongoose = require("mongoose");
const DB_URL = require("../config/config").db;

function connect() {
  return mongoose.connect("mongodb://localhost:27017/mern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connect;
