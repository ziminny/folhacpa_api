import { getRepository } from "typeorm";
import User from "../../models/user";
import {compare} from "bcrypt";
import { sign } from "jsonwebtoken";
import AppError from "../../errors/AppError";
import { errors } from "../../utils/messages";
import tokenConfig from "../../configs/token";

interface Request {
  email:string;
  password:string;
}

interface TokenAndUser {
  user:User,
  token:string;
}
class AuthService
{

  public async execute({email,password}:Request) :Promise<TokenAndUser>
  {
      const repository = getRepository(User);

      const user = await repository.findOne({email});

      if(!user) {
        throw new AppError(errors.userOrPasswordIncorrect);   
      }

      const comparePassword = await compare(password,user.password);

      if(!comparePassword) {
        throw new AppError(errors.userOrPasswordIncorrect);    
      }

      const {expiresIn,tokenKey} = tokenConfig;

      const token = sign({},tokenKey,{
        subject:user.id,
        expiresIn
      })

      return { token , user }


  }

}

export const authService = new AuthService;