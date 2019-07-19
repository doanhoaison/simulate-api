import logger from "../config/winston";
import { to, TO } from "../services/utils/util.service";
import models, { User } from "../models";

export const createUser = async userInfo => {
  [err] = await models.User.create({
    ...userInfo
  })
    .then(data => console.log("addd successfully"))
    .catch(error => logger.error(error));

  if (err) {
    throw err;
  }

  return users;
};

export const getUser = async req => {
  const { id } = req;
  console.log("id:", id);

  const where = {
    id
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
