import { getRepository } from "typeorm";
import AppError from "../errors/AppError";
import User from "../models/user";
import { errors } from "../utils/messages";

interface Request {
  id:string;
  tokenId:string;
}

class UserModifyYourselfRule
{
  public async execute({id,tokenId}:Request) :Promise<void>
  {
    const repository = getRepository(User);
    const userLogged = await repository
                      .createQueryBuilder("user")                   
                      .leftJoinAndSelect("user.rule","rule_id")
                      .where("user.id = :tokenId",{tokenId})
                      .getOne();
     const rule = userLogged?.rule;
      
     if(rule?.name === "user" && id !== tokenId) {
        throw new AppError(errors.blockedModifyDifferentUser,401);       
     }
            
  }
}

export const userModifyYourselfRule = new UserModifyYourselfRule;