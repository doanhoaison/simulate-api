import { to } from "await-to-js";
var logger = require("../../config/winston");
// import logger from '../../config/winston';
import { errorCode } from "../../constants/response-code";
import { ClientError } from "../../errors";

module.exports.to = async promise => {
  let err, res;

  [err, res] = await to(promise);
  if (err) {
    return [err];
  }

  return [null, res];
};

// Add export const use with import {}
export const TO = async promise => {
  let err, res;

  [err, res] = await to(promise);
  if (err) {
    return [err];
  }

  return [null, res];
};

export const ReE = (
  res,
  err,
  code = errorCode.BAD_REQUEST,
  errCode = errorCode.SOMETHINGS_WENT_WRONG
) => {
  // Error Web Response
  let error = err;
  let errorCode = errCode;

  if (typeof error === "object" && typeof error.message !== "undefined") {
    error = err.message;

    if (err.arguments && err.arguments.code) {
      errorCode = err.arguments.code;
    }
  }

  if (typeof code !== "undefined") {
    res.status(code);
  }

  return res.json({ error: { code: errorCode, message: error } });
};

export const ReS = (res, data, code = errorCode.SUCCESS) => {
  // Success Web Response
  let sendData;

  if (typeof data === "object") {
    sendData = Object.assign(data, sendData); // merge the objects
  }

  res.status(errorCode.SUCCESS);

  if (typeof code !== "undefined") {
    res.status(code);
  }

  return res.json(sendData);
};

export const TE = (errMessage, log = false, errorCode = null) => {
  // TE stands for Throw Error
  if (log === true) {
    logger.error(errMessage);
  }

  const error = new Error(errMessage);
  if (errorCode) {
    error.arguments = {
      code: errorCode
    };
  }

  throw error;
};

export const handleError = (response, error) => {
  if (error instanceof ClientError) {
    response
      .status(errorCode.BAD_REQUEST)
      .json({ error: { message: error.message, code: error.code } });
    return;
  }
  return;
};
