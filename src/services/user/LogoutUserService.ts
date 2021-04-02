import AppError from "../../errors/AppError";
import { blockListToken } from "../../redis/services/BlockListToken";

class LogoutUserService
{

  public async execute(refreshToken:string,accessToken:string | undefined)
  {
    if(!accessToken) {
      throw new AppError("Algum erro aconteceu ao fazer logout");
      
    }

    await blockListToken.addToBlockList(refreshToken,accessToken);

    return {
      message: "Ok"
    }
  }

}

export const logoutUserService = new LogoutUserService;