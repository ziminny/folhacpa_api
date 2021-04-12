"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CategoryController_1 = __importDefault(require("../controllers/CategoryController"));
var ensureAuthentication_1 = __importDefault(require("../middlewares/ensureAuthentication"));
var isAdmin_1 = __importDefault(require("../middlewares/isAdmin"));
var categoryRouter = express_1.Router();
categoryRouter.get("/", ensureAuthentication_1.default, CategoryController_1.default.list);
categoryRouter.get("/:id", ensureAuthentication_1.default, isAdmin_1.default, CategoryController_1.default.listOne);
exports.default = categoryRouter;
