"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailQueueAccountCreation = exports.mailQueueResetPassword = void 0;
var bull_1 = __importDefault(require("bull"));
var redis_1 = __importDefault(require("../configs/redis"));
var sendEmailAccountCreation_1 = __importDefault(require("../jobs/sendEmailAccountCreation"));
var sendEmailResetPassword_1 = __importDefault(require("../jobs/sendEmailResetPassword"));
var mailQueueResetPassword = new bull_1.default(sendEmailResetPassword_1.default.key, redis_1.default);
exports.mailQueueResetPassword = mailQueueResetPassword;
var mailQueueAccountCreation = new bull_1.default(sendEmailAccountCreation_1.default.key, redis_1.default);
exports.mailQueueAccountCreation = mailQueueAccountCreation;
