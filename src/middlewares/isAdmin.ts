import {NextFunction, Request , Response} from "express"
import {verify} from "jsonwebtoken";
import decryptToken from "../configs/decryptToken";
import Error from "../errors/AppError";
import AppError from "../errors/AppError";
import { isAdminRule } from "../rules/IsAdminRule";
import { userModifyYourselfRule } from "../rules/UserModifyYourselfRule";
import { errors } from "../utils/messages";



export default async (request:Request , response:Response , next:NextFunction) => {
      
       const authorization = request.headers.authorization;

       const tokenId = decryptToken(authorization);
       await isAdminRule.execute(tokenId)
       return next();
  
}