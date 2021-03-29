import mailConfig from "../configs/mail";

interface Handle {
    data: {
      email:string;
      lastName:string;
      name:string
    }
}

export default {
  key: 'CreateAccount',
  async handle({  data:{email , lastName, name} }:Handle ) {
    
    try {
      await mailConfig.sendMail({
        from: '"Folha CPA" <ziminny1@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Bem vindo a Folha CPA", // Subject line
        text: `Olá ${name} ${lastName}`, // plain text body
        html: `Olá <b> ${name} ${lastName}</b> </br></br> Bem vindo , ficamos feliz 
        em ter você por aqui`
         
      });
    } catch (error) {
      console.log(error);
      
    }
  
  }
}