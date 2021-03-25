import { getRepository } from "typeorm";
import DateResponseQuestion from "../../models/dateResponseQuestion";
import differenceinDays from "date-fns/differenceInDays"
import AppError from "../../errors/AppError";

class AlreadyAnsweredThisMounthService
{

  public async apllyRules(id:string):Promise<object>
  {
    const repository = getRepository(DateResponseQuestion);
// /'0a7286df-d23a-4127-b09e-657ed20fbb69'
    const lastDateResponseUSer = await repository.createQueryBuilder('alias')
              .select("MAX(created_at)","data")
              .where('alias.user_id = :id',{id})
              .getRawOne()

          if(!lastDateResponseUSer.data) {
            return {message:true}
          }
          
          const diff = differenceinDays(new Date(),new Date(lastDateResponseUSer.data)) 
          
          if(diff <= 30) {
            throw new AppError(`Você só pode responder uma categoria a cada 30 dias , dias restantes ${30- diff}`);         
          }
          
          return {message:true}
  }

}

export const alreadyAnsweredThisMounthService = new AlreadyAnsweredThisMounthService;