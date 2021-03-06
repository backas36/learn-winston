const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const appLogger = () => {
  return createLogger({
    level: "debug",
    format: combine(
      format.colorize(),
      timestamp({ format: "MM-DD HH:mm:ss" }),
      myFormat
    ),
    //defaultMeta: { service: "user-service" },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new transports.Console(),
    ],
  });
};

module.exports = appLogger;
