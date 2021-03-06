import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

export default nodemailer.createTransport(smtpTransport({
  service:process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.USER_EMAIL_LOGIN,
    pass: process.env.USER_EMAIL_PASSWORD
  }
}));


// export default nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "c6fc5b99622262",
//     pass: "f6fc0dd4cb8821"
//   }
// });