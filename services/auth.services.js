import logger from "../config/winston";
import { to, TO } from "../services/utils/util.service";
import models, { User } from "../models";

export const createUser = async userInfo => {
  let err, user;

  [ err, user ] = await to(
    User.create({
      ...userInfo
    })
  );

  if(err) {
    logger.error(err);
    throw err;
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
    throw err;
  }
  return user;
};
