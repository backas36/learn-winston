const appLogger = require("./appLogger");
let logger = null;

if (process.env.NODE_ENV === "dev") {
  logger = appLogger("debug");
}

if (process.env.NODE_ENV === "prod") {
  logger = appLogger("info");
}

module.exports = logger;
