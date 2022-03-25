"use strict";
exports.__esModule = true;
exports.getNumber = exports.getName = exports.ping = void 0;
var ping = function (req, res) {
    res.json({ Pong: true });
};
exports.ping = ping;
var getName = function (req, res) {
    var result = req.params.name;
    res.json({ nome: result });
};
exports.getName = getName;
var getNumber = function (req, res) {
    var rNumber = Math.floor(Math.random() * 10);
    res.json({ Numero: rNumber });
};
exports.getNumber = getNumber;
