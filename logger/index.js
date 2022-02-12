const appLogger = require("./appLogger");
const prodLogger = require("./prodLogger");
let logger = null;

if (process.env.NODE_ENV === "dev") {
  logger = appLogger();
}

if (process.env.NODE_ENV === "prod") {
  logger = prodLogger();
}

module.exports = logger;
