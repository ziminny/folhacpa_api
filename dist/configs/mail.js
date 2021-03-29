"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = __importDefault(require("nodemailer"));
var aws_sdk_1 = __importDefault(require("aws-sdk"));
aws_sdk_1.default.config.update({
    accessKeyId: 'ses-smtp-user.20210329-130604',
    secretAccessKey: 'BIkh/Wo126+OcUiS37lfhlP4MWOTpCQD9RrtAWBcbt6z',
    region: 'sa-east-1'
});
exports.default = nodemailer_1.default.createTransport({
    SES: new aws_sdk_1.default.SES({
        apiVersion: '2021-12-03'
    })
    // host: "smtp.gmail.com",
    // port: 465,
    // secure: true,
    // auth: {
    //   user: process.env.USER_EMAIL_LOGIN, 
    //   pass: process.env.USER_EMAIL_PASSWORD     
    // }
});
// export default nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "c6fc5b99622262",
//     pass: "f6fc0dd4cb8821"
//   }
// });
