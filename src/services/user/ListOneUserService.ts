import { getRepository } from "typeorm";
import AppError from "../../errors/AppError";
import User from "../../models/user";
import { errors } from "../../utils/messages";

class ListOneUserService
{

  public async execute(id:string) :Promise<User>
  {
    const repository = getRepository(User);
    
    const user = await repository.findOne({id});

    if(!user) {
      throw new AppError(errors.userNotFound);   
    }

    return user;
  }

}

export const listOneUserService = new ListOneUserService;