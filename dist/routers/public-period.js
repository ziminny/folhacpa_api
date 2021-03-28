"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PeriodController_1 = __importDefault(require("../controllers/PeriodController"));
var periodRouter = express_1.Router();
periodRouter.get("/", PeriodController_1.default.list);
exports.default = periodRouter;
