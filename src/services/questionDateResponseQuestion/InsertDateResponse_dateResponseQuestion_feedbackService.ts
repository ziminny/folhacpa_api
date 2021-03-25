import { getManager, getRepository } from "typeorm";
import AppError from "../../errors/AppError";
import DateResponseQuestion from "../../models/dateResponseQuestion";
import Feedback from "../../models/feedback";
import QuestionDateResponseQuestion from "../../models/questionDateResponseQuestion";

interface Request {
  userId: string;
  questionId: string;
  note: string;
  categoryId: string;
}



class InsertDateResponse_dateResponseQuestion_feedbackService 
{
  public async execute(datas:Request[],opinion:string):Promise<object>
  {
    const dateResponseQuestionRepository = getRepository(DateResponseQuestion);
    const userId = datas[0].userId
    const categoryId = datas[0].categoryId
    if(!userId || !categoryId) {
      throw new AppError("Algum erro aconteceu ao salvar os dados !");   
    }

    const dateResponseQuestion = dateResponseQuestionRepository.create({userId});

    const quetionDateresponseQuestionRepository = getRepository(QuestionDateResponseQuestion);

    const feedbackRepository = getRepository(Feedback)
    const feedback = feedbackRepository.create({userId,categoryId,opinion})

    await getManager().transaction(async transactionalEntityManager => {

      try {
        const {id:dateResponseId} = await transactionalEntityManager.save(dateResponseQuestion);
        datas.forEach(async (res,index) => {
          const quetionDateresponseQuestion = quetionDateresponseQuestionRepository.create({
            dateResponseId,
            questionId:res.questionId,
            note:res.note
            
          })
          await transactionalEntityManager.save(quetionDateresponseQuestion);
        })
        if(opinion) {
          await transactionalEntityManager.save(feedback);
        }
      } catch (error) {
        throw new AppError("Algum erro aconteceu ao salvar os dados !");  
      }

      
    })
   
     return {
       message: 'Dados salvos com sucesso !'
     }
        
  }
}

export const insertDateResponse_dateResponseQuestion_feedbackService = new InsertDateResponse_dateResponseQuestion_feedbackService;