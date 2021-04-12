import AbstractRedis from "./AbstractRedis";
import tokenConfig from "../../configs/token"
import { verify } from "jsonwebtoken";
import moment from "moment";

interface Token {
  iat:number;
  exp:number;
  sub:string
}

class BlockListToken extends AbstractRedis
{

  constructor()
  {
    super("blocklist:")
  }

  public async addToBlockList(refreshToken:string,accessToken:string)
  {
    await super.set(refreshToken,"")
    try {
      const [, token] = accessToken.split(" ");
      const {tokenKey} = tokenConfig;
      const decripty = verify(token,tokenKey);
      const { exp } = decripty as Token;
      await super.expireat(refreshToken,exp);
    } catch (error) {
      const expireIn = moment().add(7,"d").unix();
      await super.expireat(refreshToken,expireIn);
    }
  }

  public async existsToken(refreshToken:string)
  {
    return await super.exists(refreshToken);
  }

}

export const blockListToken = new BlockListToken;