import { sign } from "jsonwebtoken";
import { getRepository } from "typeorm";
import AppError from "../../errors/AppError";
import User from "../../models/user";
import tokenConfig from "../../configs/token"
import { refreshToken as refreshTokenRedis } from "../../redis/services/RefreshToken";
import { blockListToken } from "../../redis/services/BlockListToken";

interface Tokens{
  refreshToken:string;
  id:string;
}

class RefreshTokenService
{

  public async execute({refreshToken,id}:Tokens)
  {
    const exists = await refreshTokenRedis.existsToken(refreshToken)
    console.log(refreshToken);
    
    if(!exists) {
      throw new AppError("Refresh token invalido!");
    }
    if(!id) {
      throw new AppError("O id é obrigatório !");
    }

    const blockList = await blockListToken.existsToken(refreshToken)
    if(blockList) {
      throw new AppError("Este refresh token não esta mais acessivel")
    }

    await refreshTokenRedis.removeToken(refreshToken);
    await refreshTokenRedis.addRefreshToken()
    const newRefreshToken = refreshTokenRedis.getRefreshToken(); 

    const userRepository = getRepository(User);

    const user = await userRepository.findOne({id});

    if(!user) {
      throw new AppError("Usuário não encontrado");
    }
    const {expiresIn,tokenKey} = tokenConfig

    const token = sign({},tokenKey,{
      subject:user.id,
      expiresIn
    })
    
  
    return {
      refreshToken:newRefreshToken,
      token
    }
  }

}

export const refreshTokenService = new RefreshTokenService;