import { getRepository } from "typeorm";
import User from "../../models/user";

class ListUserService
{
  public async execute():Promise<User[]>
  {

    const repository = await getRepository(User)
        .createQueryBuilder("user")                   
        .leftJoinAndSelect("user.rule","rule_id")
        .leftJoinAndSelect("user.period","period_id")
        .getMany(); 
    return repository;
  }
}

export const listUserService = new ListUserService;