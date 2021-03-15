import nodemailer from "nodemailer";
import smtpTransport from "nodemailer"
import ResetPassword from "../models/resetPassword";

export default async (email:string, token:string) =>  {

  let testAccount = await nodemailer.createTestAccount();

// var transporter = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "c6fc5b99622262",
//     pass: "f6fc0dd4cb8821"
//   }
// });

var transporter = nodemailer.createTransport({
    service:process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.USER_EMAIL_LOGIN, 
      pass: process.env.USER_EMAIL_PASSWORD     
    }
});

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Folha CPA" <ziminny1@gmail.com>', // sender address
    to: "ziminny@gmail.com", // list of receivers
    subject: "Recuperação de senha", // Subject line
    text: "Você solicitou a recuperação de senha", // plain text body
    html: `<b> Olá </b> token: ${token}`, // html body
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

