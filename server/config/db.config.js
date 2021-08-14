const config = require('./env');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorAliases: false,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

//db
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//require models
db.pupload = require('../models/upload.model')(sequelize, Sequelize);

module.exports = db;