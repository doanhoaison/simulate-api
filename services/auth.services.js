import logger from "../config/winston";
import { to, TO } from "../services/utils/util.service";
import models, { User } from "../models";

import { ClientError } from '../errors/index';
import { errCode } from '../constants/response-code';

export const createUser = async userInfo => {
  let err, user;

  [ err, user ] = await to(
    User.create({
      ...userInfo
    })
  );

  if(err) {
    logger.error(err);
  }

  return user;
};

export const getUser = async req => {
  console.log('req: ', req);
  const { phone } = req;

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
    // throw err;
    throw new ClientError('This phone is not register', errCode.PHONE_NOT_REGISTER);
  }
  return user;
};
