import logger from "../config/winston";
import { to, TO } from "../services/utils/util.service";
import models, { User } from "../models";

import { ClientError } from "../errors/index";
import { errorCode } from "../constants/response-code";

export const createUser = async userInfo => {
  let err, user;

  [err, user] = await to(
    User.create({
      ...userInfo
    })
  );

  if (err) {
    logger.error(err);
  }

  return user;
};

export const getUser = async req => {
  const { phone } = req;
  logger.info(errorCode);

  const where = {
    phone
  };
  let err, user;

  [err, user] = await TO(
    User.findOne({
      where
    })
  );

  if (err) {
    throw new ClientError(
      "This phone is not register",
      errorCode.PHONE_NOT_REGISTER
    );
  }
  if (!user) {
    throw new ClientError(
      "This phone is not register",
      errorCode.PHONE_NOT_REGISTER
    );
  }
  return user;
};
