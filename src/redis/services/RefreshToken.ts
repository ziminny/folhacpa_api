import AbstractRedis from "./AbstractRedis";
import {randomBytes} from "crypto";
import moment from "moment";
import AppError from "../../errors/AppError";
class RefreshToken extends AbstractRedis
{
  protected refreshToken:string;
  constructor() 
  {
    super("refreshToken:")
  }

  private generateToken():string
  {
    return randomBytes(36).toString("hex");
  }
  private expireIn()
  {
    return moment().add(30,"d").unix();
  }

  public async addRefreshToken()
  {
    this.refreshToken = this.generateToken();
    const expiredIn = this.expireIn();
    await super.set(this.refreshToken,"");
    await super.expireat(this.refreshToken,expiredIn)
  }

  public getRefreshToken():string
  {
    if(!this.refreshToken) {
      throw new AppError("Erro ao buscar o refresh token !");
    }
    return this.refreshToken;
  }

  public async existsToken(token:string):Promise<boolean>
  {
    return await super.exists(token)
  }

  public async removeToken(token:string):Promise<void>
  {
     await super.del(token)
  }
   
}

export const refreshToken = new RefreshToken();