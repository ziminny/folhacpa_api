import { DeleteResult, getRepository } from "typeorm";
import AppError from "../../errors/AppError";
import User from "../../models/user";
import { errors } from "../../utils/messages";

class DeleteUserService
{

  public async execute(id:string):Promise<DeleteResult>
  {
    const repository = getRepository(User);
    const findUser = await repository.findOne({id});
    if(!findUser) {
      throw new AppError(errors.userNotFound);
      
    }
    return await repository.delete({id});
  }

}

export const deleteUserService = new DeleteUserService;