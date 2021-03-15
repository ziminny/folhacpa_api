import { getRepository } from "typeorm";
import AppError from "../../errors/AppError";
import ResetPassword from "../../models/resetPassword";
import { errors } from "../../utils/messages";

interface Request {
  id:string;
  token:string
}

interface Response {
  message:string
}

class ComparePasswardUserService
{

  public async execute({id:userId , token}:Request) :Promise<Response>
  {
    
      const repository = getRepository(ResetPassword);
    
    
      const resetPassword = await repository.findOne({userId});

      if(!resetPassword) {
        throw new AppError(errors.emailNotFound);
      }
      if(resetPassword.token !== token) {
        throw new AppError(errors.combinationTokenNoMath);
      }
      const timestampsNow = new Date().getTime()
      
        if(timestampsNow > resetPassword.expireIn) {
          throw new AppError(errors.expiredToken,401);
        }
       
      //await repository.delete({id});

      return {
        message: "Token aceito!"
      }
  }

}

export const comparePasswardUserService = new ComparePasswardUserService;