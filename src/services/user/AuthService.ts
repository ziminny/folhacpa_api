import { getRepository } from "typeorm";
import User from "../../models/user";
import {compare} from "bcrypt";
import { sign } from "jsonwebtoken";
import AppError from "../../errors/AppError";
import { errors } from "../../utils/messages";
import tokenConfig from "../../configs/token";
import { refreshToken as RefreshToken } from "../../redis/services/RefreshToken";

interface Request {
  email:string;
  password:string;
}

interface TokenAndUser {
  user:User,
  token:string;
  refreshToken:string;
}
class AuthService
{

  public async execute({email,password}:Request) :Promise<TokenAndUser>
  {
 
      
      
      await RefreshToken.addRefreshToken()

      const refreshToken = RefreshToken.getRefreshToken();
    
      const repository = getRepository(User);
     
      const user = await repository.findOne({email});

      if(!user) {
        
        throw new AppError(errors.userOrPasswordIncorrect,402);   
      }

      const comparePassword = await compare(password,user.password);

      if(!comparePassword) {
        throw new AppError(errors.userOrPasswordIncorrect,402);    
      }

      const {expiresIn,tokenKey} = tokenConfig;

      const token = sign({},tokenKey,{
        subject:user.id,
        expiresIn
      })

      return { token , user, refreshToken }


  }

}

export const authService = new AuthService;