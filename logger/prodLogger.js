const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return ` [${level}] ${timestamp}: ${message}`;
});

const prodLogger = () => {
  return createLogger({
    level: "info",
    format: combine(timestamp(), myFormat),
    //defaultMeta: { service: "user-service" },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new transports.Console(),
      new transports.File({ filename: "production-Log.log" }),
    ],
  });
};

module.exports = prodLogger;
