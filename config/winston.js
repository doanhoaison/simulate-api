var appRoot = require("app-root-path");
var winston = require("winston");
const { format } = require("logform");
const { combine, timestamp, splat, printf } =  format;

var options = {
  file: {
    level: "info",
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: "info",
    handleExceptions: true,
    json: true,
    colorize: true
  }
};
const myFormat = printf(({ timestamp, level, message, meta }) => {
  return `${timestamp} [${level}] : ${message} : ${meta? JSON.stringify(meta) : ''}`;
});

let userFormat = combine(
  timestamp(),
  myFormat
)

var logger = new winston.createLogger({
    // format: combine(
    //   splat(),
    //   timestamp(),
    //   myFormat,
    // ),
    format: userFormat,
    transports: [
      new winston.transports.File(options.file),
      new winston.transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
  });

logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};

module.exports = logger;
