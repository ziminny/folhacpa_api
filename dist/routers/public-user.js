"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ResetPasswordController_1 = __importDefault(require("../controllers/ResetPasswordController"));
var UserController_1 = __importDefault(require("../controllers/UserController"));
var publicRoutes = express_1.Router();
publicRoutes.post("/", UserController_1.default.create);
publicRoutes.post("/auth", UserController_1.default.auth);
publicRoutes.post("/send_password", ResetPasswordController_1.default.sendEmailResetPassword);
publicRoutes.post("/compare_token/:id", ResetPasswordController_1.default.compareToken);
publicRoutes.post("/reset_password/:id", ResetPasswordController_1.default.changePassword);
exports.default = publicRoutes;
