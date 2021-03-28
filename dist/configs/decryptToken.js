"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var AppError_1 = __importDefault(require("../errors/AppError"));
var messages_1 = require("../utils/messages");
var token_1 = __importDefault(require("./token"));
exports.default = (function (authorization) {
    if (!authorization) {
        throw new AppError_1.default(messages_1.errors.emptyToken, 401);
    }
    try {
        var _a = authorization.split(" "), token = _a[1];
        var tokenKey = token_1.default.tokenKey;
        var decripty = jsonwebtoken_1.verify(token, tokenKey);
        var id = decripty.sub;
        return id;
    }
    catch (error) {
        throw new AppError_1.default(messages_1.errors.invalidToken, 401);
    }
});
