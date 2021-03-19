
import { getRepository, UpdateResult } from "typeorm";
import AppError from "../../errors/AppError";
import User from "../../models/user";
import hashPassword from "../../utils/hashPassword";
import { errors } from "../../utils/messages";


interface Request {
  name:string;
  lastName:string;
  email:string;
  password:string;
  periodId:string;
  id:string;
}

class UpdateUserService
{

  public async execute({name,lastName,email,password,periodId,id}:Request) :Promise<UpdateResult>
  {
    const repository = getRepository(User);

    // comparar o id do token com o id da url , usuário não pode alterar outro id que não seja o seu

    if(!name || !lastName || !email || !password || !periodId) {
      throw new AppError(errors.allFieldsRequired);  
    }
 
    
    const findUser = await repository.find({email});

    const isModifYourelf = findUser.every( user => user.id == id);

    if(!isModifYourelf) {
      throw new AppError(errors.emailInUse);
    }


    const user = await repository.update({id},{
      name,
      lastName,
      email,
      password:hashPassword(password),
      periodId,
    });

    return user;

    


  }

}

export const updateUserService = new UpdateUserService;