'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import DBCONFIG from '../config/database.config';
console.log('config: ', DBCONFIG);
console.log('model/index.js');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];

const db = {};
const config = DBCONFIG[env];
console.log('config', config);

let sequelize;
if (config.use_env_variable) {
  console.log('if');
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  console.log('else');

  sequelize = new Sequelize(config.database, config.username, config.password, config);
  console.log('sequelize', sequelize);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
