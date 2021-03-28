"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ensureAuthentication_1 = __importDefault(require("../middlewares/ensureAuthentication"));
var category_1 = __importDefault(require("./category"));
var public_period_1 = __importDefault(require("./public-period"));
var public_user_1 = __importDefault(require("./public-user"));
var questions_1 = __importDefault(require("./questions"));
var user_1 = __importDefault(require("./user"));
var routers = express_1.Router();
routers.use("/users", public_user_1.default);
routers.use("/users", ensureAuthentication_1.default, user_1.default);
routers.use("/period", public_period_1.default);
routers.use("/category", category_1.default);
routers.use("/questions", questions_1.default);
exports.default = routers;
