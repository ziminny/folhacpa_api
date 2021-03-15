import {NextFunction, Request , Response} from "express"
import {verify} from "jsonwebtoken";
import AppError from "../errors/AppError";
import { errors } from "../utils/messages";
import userToken from "../configs/token"
import decryptToken from "../configs/decryptToken";

interface Token {
  iat:number;
  exp:number;
  sub:string
}

export default (request:Request , response:Response , next:NextFunction) => {

    const authorization = request.headers.authorization;
    const id = decryptToken(authorization);
    request.user = {
      id
    }
    return next();
}