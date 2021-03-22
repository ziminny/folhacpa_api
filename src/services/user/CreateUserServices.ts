import { getRepository } from "typeorm";
import AppError from "../../errors/AppError";
import { mailQueueAccountCreation } from "../../libs/Queue";
import User from "../../models/user";
import hashPassword from "../../utils/hashPassword";
import { errors } from "../../utils/messages";

interface Request {
  name:string;
  lastName:string;
  email:string;
  password:string;
  periodId:string;
}

class CreateUserServices
{



  public async execute({name , lastName , email , password , periodId  }:Request):Promise<User>
  {
    
    const repository = getRepository(User);
    
    const existsEmail = await repository.findOne({email});
    if(existsEmail) {
      throw new AppError(errors.emailInUse);  
    }  
    
    if(!name || !lastName || !email || !password || !periodId) {
      throw new AppError(errors.allFieldsRequired);  
    }

    const user = repository.create({
      name , 
      lastName , 
      email , 
      periodId , 
      ruleId:"8fe485b5-629b-41b2-9c86-ef0fb6d14ce4" , 
      password:hashPassword(password)
    });

    await repository.save(user);
    await mailQueueAccountCreation.add({email,name,lastName})
    return user;

  }

}

export const createUserServices = new CreateUserServices;