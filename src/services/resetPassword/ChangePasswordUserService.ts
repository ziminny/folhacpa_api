import { getRepository } from "typeorm";
import AppError from "../../errors/AppError";
import ResetPassword from "../../models/resetPassword";
import User from "../../models/user";
import hashPassword from "../../utils/hashPassword";
import { errors } from "../../utils/messages";

interface Request {
  password:string;
  id:string;
}

class ChangePasswordUserService
{

  public async execute({id,password}:Request) :Promise<User>
  {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({id});

    if(!password) {
      throw new AppError(errors.passwordNoptFound); 
    }
    if(!user) {
      throw new AppError(errors.userNotFound);    
    }

    user.password = hashPassword(password);

    await userRepository.save(user);

    const resetPasswordRepository = getRepository(ResetPassword);

    await resetPasswordRepository.delete({userId:id});
    

    return user;
  }

}

export const changePasswordUserService = new ChangePasswordUserService;