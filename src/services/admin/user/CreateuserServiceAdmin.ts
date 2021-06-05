import { getRepository } from "typeorm";
import AppError from "../../../errors/AppError";
import User from "../../../models/user";
import hashPassword from "../../../utils/hashPassword";
import { errors } from "../../../utils/messages";

interface Request {
  name:string;
  lastName:string;
  ruleId:string;
  periodId:string;
  email:string;
  password:string;
}

class CreateuserServiceAdmin
{

  public async execute({
    name,lastName,email,password,periodId,ruleId}:Request) :Promise<User>
  {
  
    
    if(!name ||!lastName || !email || !password || !ruleId) {
      throw new AppError(errors.allFieldsRequired); 
    }
    //rules
    // user "d45c826d-58a8-4edb-b090-0a68a5975057"
    // admin f75ddf68-c44f-414d-9cb2-548716ddcb65

    // periods 
    //"8ad9cce8-7f04-49e9-a492-2dea34ec2386" manha 
    // "db353d4e-33a6-4ce0-bdcb-221b9208affb" noite
    // "48a1c24e-e7b5-4b72-a81f-c24e206daf13" tarde

    if(ruleId === "d45c826d-58a8-4edb-b090-0a68a5975057") {
      if(!periodId) {
        throw new AppError(errors.allFieldsRequired);
      } 
    }
    const repository = getRepository(User);
    

    const user = repository.create({
      name,lastName,email,
      password:hashPassword(password),
      periodId,ruleId})

      await repository.save(user)

      return user; 
  }

  

}

export const createuserServiceAdmin = new CreateuserServiceAdmin;