"use strict";
exports.__esModule = true;
exports.sequelize = void 0;
var sequelize_1 = require("sequelize");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
exports.sequelize = new sequelize_1.Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    dialect: "mysql",
    port: parseInt(process.env.MYSQL_PORT)
});
