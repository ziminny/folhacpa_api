import { getRepository } from "typeorm"
import DateResponseQuestion from "../../models/dateResponseQuestion";
import QuestionDateResponseQuestion from "../../models/questionDateResponseQuestion"

interface Request 
{
  userId:string;
  questionId:string;
}

class CheckResponsesUserService
{

  public async execute({userId,questionId}:Request):Promise<object>
  {
    
    if(!userId || !questionId) {
      return {message:false}
    }
    const questionDateResponseRepository = getRepository(DateResponseQuestion);

    const questionDateResponse = await questionDateResponseRepository.find({userId})
    
    if(!questionDateResponse) {
      
      
      return {message:false}
    }

    const questionDateResponseQuestionrepository = getRepository(QuestionDateResponseQuestion);
    let verify = false;
  
    for (let index = 0; index < questionDateResponse.length; index++) {
       const query =  await questionDateResponseQuestionrepository.findOne(
        {
          questionId,
          dateResponseId:questionDateResponse[index].id
        })
        if(query) {
          verify = true;
       }   
    }

   return {message:verify};
  }
}

export const checkResponsesUserService = new CheckResponsesUserService