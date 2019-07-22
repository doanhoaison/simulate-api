import express from "express";
import { ReS, ReE, TO } from "../services/utils/util.service";
import * as userControllers from '../controllers/user.controller';

const router = express.Router();

// router.post("/users/login", async (req, res) => {
//   return ReS(res, { body: "Hello World", isForceOTP: true });
// });

router.post("/users/register", userControllers.register);
router.post("/users/login",userControllers.getUserInfo);

module.exports = router;
