import { Request, Response } from "express";
import { checkResponsesUserService } from "../services/questionDateResponseQuestion/CheckResponsesUserService";
import { insertDateResponse_dateResponseQuestion_feedbackService } from "../services/questionDateResponseQuestion/InsertDateResponse_dateResponseQuestion_feedbackService";

class CheckResponsesUserServiceController
{

  public static async check(request:Request,response:Response)
  {
    
    const {questionId,userId} = request.body
    
    const res = await checkResponsesUserService.execute({questionId,userId});
    return response.json(res)
  }

}

export default CheckResponsesUserServiceController;