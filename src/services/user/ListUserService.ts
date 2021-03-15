import { getRepository } from "typeorm";
import User from "../../models/user";

class ListUserService
{
  public async execute():Promise<User[]>
  {
    const repository = getRepository(User); 
    return await repository.find();
  }
}

export const listUserService = new ListUserService;