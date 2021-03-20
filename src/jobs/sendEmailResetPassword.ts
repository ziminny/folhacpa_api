import mailConfig from "../configs/mail";

interface Handle {
    data: {
      email:string;
      token:string;
      name:string
    }
}

export default {
  key: 'ResetPassword',
  async handle({  data:{email , token, name} }:Handle ) {
    
    await mailConfig.sendMail({
      from: '"Folha CPA" <ziminny1@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Recuperação de senha", // Subject line
      text: "Você solicitou a recuperação de senha", // plain text body
      html: `Olá <b> ${name} </b> Vocẽ solicitou a alteração da senha </br> 
            use o código para redefinir sua senha </br></br> <b>${token}</b> </br></br>
              O token tem validade de 1 hora
            `, // html body
    });
  
  }
}