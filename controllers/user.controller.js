import models from '../models';
import * as authServices from '../services/auth.services';
import logger from '../config/winston';
import { ReS, TO } from '../services/utils/util.service';

export const register =  async (req, res) => {
    const body = req.body;
    let [ err, user ] = await authServices.createUser(body);

    if(err) {
        logger.err('error');
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
      logger.err("err");
      return err;
    }
    return ReS(res, {
        message: 'get user success',
        data: user,
    })
}