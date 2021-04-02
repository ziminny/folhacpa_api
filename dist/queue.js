"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var Queue_1 = require("./libs/Queue");
var sendEmailResetPassword_1 = __importDefault(require("./jobs/sendEmailResetPassword"));
var sendEmailAccountCreation_1 = __importDefault(require("./jobs/sendEmailAccountCreation"));
var sendMessageAddNewCategory_1 = __importDefault(require("./jobs/sendMessageAddNewCategory"));
Queue_1.mailQueueResetPassword.process(sendEmailResetPassword_1.default.handle);
Queue_1.mailQueueAccountCreation.process(sendEmailAccountCreation_1.default.handle);
Queue_1.sendQueueMessageAddNewCategory.process(sendMessageAddNewCategory_1.default.handle);
