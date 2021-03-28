"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = require("bcrypt");
exports.default = (function (password) {
    return bcrypt_1.hashSync(password, 8);
});
