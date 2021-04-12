import { DeleteResult, getRepository } from "typeorm";
import Error from "../../../errors/AppError";
import User from "../../../models/user";

class DeleteManyUsersService
{

  public async execute(ids:[]) :Promise<void>
  {
    const respository = getRepository(User);
    try {
      ids.forEach( async id => {
        return await respository.delete({id})
      })
    } catch (error) {
        throw new Error("Algum erro aconteceu ao tentar deletar os usuários");
        
    }

   
  }

}

export const deleteManyUsersService = new DeleteManyUsersService;