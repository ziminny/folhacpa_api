import { Request, Response } from "express";
import { alreadyAnsweredThisMounthService } from "../services/questionDateResponseQuestion/AlreadyAnsweredThisMounthService";

class AlreadyAnsweredThisMounthController
{

  public static async applyRule(request:Request,response:Response) 
  {
    const {id} = request.body;
    const res = await alreadyAnsweredThisMounthService.apllyRules(id);
    return response.json(res)
  }

}

export default AlreadyAnsweredThisMounthController