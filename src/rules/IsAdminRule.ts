import { getRepository } from "typeorm";
import AppError from "../errors/AppError";
import User from "../models/user";
import { errors } from "../utils/messages";

class IsAdminRule
{

  public async execute(tokenId:string) :Promise<void>
  {
    const repository = getRepository(User);
    const userLogged = await repository
                      .createQueryBuilder("user")                   
                      .leftJoinAndSelect("user.rule","rule_id")
                      .where("user.id = :tokenId",{tokenId})
                      .getOne();
     const rule = userLogged?.rule;
      
     if(rule?.name !== "admin") {
        throw new AppError(errors.blockedModifyDifferentUser,401);       
     }
            
  }

}

export const isAdminRule = new IsAdminRule;