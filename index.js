import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import v1 from "./route/v1";
import CONFIG from "./config/config";
var logger = require("./config/winston");

dotenv.config();

const app = express();

//CORS
app.use(cors());

//MORGAN
app.use(morgan("combined", { stream: logger.stream }));

//PARSE APLICATION/JSON
app.use(bodyParser.json());
//PARSE APPLICATION/X-WWW-FORM-URLENCODED
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/v1", v1);

app.use("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to API",
    data: {}
  });
});

const models = require("./models");

models.sequelize
  .authenticate()
  .then(() => {
    logger.info(`Connected to SQL database: ${CONFIG.db_name}`);
  })
  .catch(err => {
    logger.error(
      `Unable to connect to SQL database: ${CONFIG.db_name} ${err} `
    );
  });

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  logger.info(`App is running on PORT ${PORT}`);
});
