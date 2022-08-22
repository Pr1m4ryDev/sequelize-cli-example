import Sequelize from "sequelize";
import config from "../config/config.js";

const { development, production, test } = config;

const ENVIRONMENT = {
  DEV: development,
  TEST: test,
  PROD: production,
};
const CONFIG = ENVIRONMENT[process.env.DB_ENVIRONMENT];
const connection = new Sequelize(CONFIG);

const DataTypes = Sequelize.DataTypes;

export { connection as Sequelize, DataTypes };
