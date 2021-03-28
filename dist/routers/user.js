"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("../controllers/UserController"));
var multer_1 = __importDefault(require("multer"));
var upload_1 = __importDefault(require("../configs/upload"));
var userModifyYourself_1 = __importDefault(require("../middlewares/userModifyYourself"));
var isAdmin_1 = __importDefault(require("../middlewares/isAdmin"));
var userRouter = express_1.Router();
var upload = multer_1.default(upload_1.default);
userRouter.get("/", isAdmin_1.default, UserController_1.default.list);
userRouter.get("/:id", userModifyYourself_1.default, UserController_1.default.listOne);
userRouter.put("/:id", userModifyYourself_1.default, UserController_1.default.update);
userRouter.delete("/:id", userModifyYourself_1.default, UserController_1.default.delete);
userRouter.patch("/avatar", upload.single('avatar'), UserController_1.default.updateAvatar);
exports.default = userRouter;
