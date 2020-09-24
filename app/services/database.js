'use strict';

var config    = require('../config');
var sequelize = require('sequelize');

module.exports = new sequelize(config.db.name, config.db.user, config.db.password, {
    dialect: config.db.details.dialect,
    host: config.db.details.host,
    port: 3306
}
);

