import models from '../models';
import * as authServices from '../services/auth.services';
import logger from '../config/winston';
import { ReS, TO } from '../services/utils/util.service';

export const register =  async (req, res) => {
    const body = req.body;

    let [ err, user ] = await TO(authServices.createUser(body));

    if(err) {
        logger.error('error');
        return err;
    }

    return ReS(res, {
        message: 'Successfully created new user',
        user
    })
}
export const getUserInfo = async(req, res) => {
    let [ err, user ] = await TO (authServices.getUser(req.body));

    if (err) {
      logger.error("err", err);
      return err;
    }
    logger.info("User: ", user);

    return ReS(res, {
        message: 'get user success',
        data: user,
    })
}