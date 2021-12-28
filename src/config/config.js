const dotenv = require("dotenv");
dotenv.config();

const logger = require("loglevel");
dotenv.config();

const ENV = process.env.NODE_ENV || "development";

logger.enableAll();

const CONFIG = {
  development: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    client: {
      URL: process.env.CLIENT_URL || "http://localhost:3000",
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
    db: {
      url: process.env.DB_URL,
    },
    firebase: {
      certConfig: {
      },
    },
  },
};

module.exports = CONFIG[ENV];
