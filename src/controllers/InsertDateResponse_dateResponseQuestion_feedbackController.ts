import { Request, Response } from "express";
import { insertDateResponse_dateResponseQuestion_feedbackService } from "../services/questionDateResponseQuestion/InsertDateResponse_dateResponseQuestion_feedbackService";

class InsertDateResponse_dateResponseQuestion_feedbackController
{

  public static async createMany(request:Request,response:Response)
  {
    const {datas,opinion} = request.body

    const res = await insertDateResponse_dateResponseQuestion_feedbackService.execute(datas,opinion);
    return response.json(res)
  }

}

export default InsertDateResponse_dateResponseQuestion_feedbackController;