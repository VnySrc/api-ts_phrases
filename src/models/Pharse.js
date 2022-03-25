"use strict";
exports.__esModule = true;
exports.Pharse = void 0;
var mysql_1 = require("../instances/mysql");
var sequelize_1 = require("sequelize");
exports.Pharse = mysql_1.sequelize.define("Pharse", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    author: {
        type: sequelize_1.DataTypes.STRING
    },
    content: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: "phrases",
    timestamps: false
});
