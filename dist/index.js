"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
//import "./libs/mail"
dotenv_1.default.config();
require("./database");
require("express-async-errors");
var express_1 = __importDefault(require("express"));
var routers_1 = __importDefault(require("./routers"));
var AppError_1 = __importDefault(require("./errors/AppError"));
var upload_1 = __importDefault(require("./configs/upload"));
var cors_1 = __importDefault(require("cors"));
var expireIn = new Date();
expireIn.setHours(expireIn.getHours() + 1);
var dd = expireIn.getTime();
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
// AVATAR
app.use("/files", express_1.default.static(upload_1.default.directory));
app.use(routers_1.default);
app.use(function (error, request, response, next) {
    if (error instanceof AppError_1.default) {
        return response.status(error.code).json({ message: error.message });
    }
    console.log(error);
    console.log(error);
    return response.status(500).json({ message: "Erro interno no servidor!" });
});
var port = 3334;
app.listen(port, function () { return console.log("Server is running port " + port); });
