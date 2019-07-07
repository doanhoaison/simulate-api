import express from "express";
import { ReS, ReE, TO } from "../services/utils/util.service";
import models from '../models';

const router = express.Router();

router.post("/users/login", async (req, res) => {
  return ReS(res, { body: "Hello World", isForceOTP: true });
});

router.post("/users/register", async (req, res) => {
})
module.exports = router;
