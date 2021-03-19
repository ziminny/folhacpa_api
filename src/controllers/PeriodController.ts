import {Request,Response} from "express";
import { listPeriodService } from "../services/period/ListPeriodService";
class PeriodController
{

  public static async list(request:Request,response:Response):Promise<object>
  {
    const periods = await listPeriodService.execute();
    return response.json(periods);
  }

}

export default PeriodController;