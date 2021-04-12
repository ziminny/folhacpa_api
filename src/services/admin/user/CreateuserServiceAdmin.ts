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
    // user "6b22728c-385a-46dc-969b-919bdc9c5c55"
    // admin f6972d5f-8edd-4f65-8a09-131c2adc9798

    // periods 
    //"8ad9cce8-7f04-49e9-a492-2dea34ec2386" manha 
    // "db353d4e-33a6-4ce0-bdcb-221b9208affb" noite
    // "48a1c24e-e7b5-4b72-a81f-c24e206daf13" tarde

    if(ruleId === "6b22728c-385a-46dc-969b-919bdc9c5c55") {
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