import { getRepository } from "typeorm";
import AppError from "../../errors/AppError";
import ResetPassword from "../../models/resetPassword";
import User from "../../models/user";
import { errors } from "../../utils/messages";
import crypto from "crypto";
import Queue from "../../libs/Queue";

interface Request {
  email:string;

}

class SendEmailResetPasswordService
{

  public async execute({email}:Request) :Promise<ResetPassword>
  {
    
    
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({email});
      
      
    if(!user) {
      throw new AppError(errors.emailNotFound);  
    }
    
    const resetPasswordRepository = getRepository(ResetPassword);
    const resetPassword = await resetPasswordRepository.findOne({userId:user.id})

   
    
    if(resetPassword) {
     
      await resetPasswordRepository.delete({userId:user.id})
    }

    let token = String(Math.floor(Math.random() * 655361) + 327681);
    let date = new Date();
    date.setHours(date.getHours() + 1)
    const expireIn = date.getTime();

    const createResetPassword = resetPasswordRepository.create({userId:user.id,expireIn,token})

    await resetPasswordRepository.save(createResetPassword); 

    // await mail(email,createResetPassword.token);
    await Queue.add({token , email , name:user.name});

    return createResetPassword;

  }

}

export const sendEmailResetPasswordService = new SendEmailResetPasswordService;