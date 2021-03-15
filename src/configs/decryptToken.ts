import {verify} from "jsonwebtoken";
import AppError from "../errors/AppError";
import { errors } from "../utils/messages";
import userToken from "./token";
interface Token {
  iat:number;
  exp:number;
  sub:string
}

export default (authorization:string | undefined) => {
  if(!authorization)
  {
    throw new AppError(errors.emptyToken,401);
  }
  try {
    const [, token] = authorization.split(" ");
    const {tokenKey} = userToken;
    const decripty = verify(token,tokenKey);
    const { sub:id } = decripty as Token;
    return id;
  
  } catch (error) {
    throw new AppError(errors.invalidToken,401);
  }
  
}