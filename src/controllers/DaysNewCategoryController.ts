import { Request, Response } from "express";
import { daysNewCategoryService } from "../services/questionDateResponseQuestion/DaysNewCategoryService";

class DaysNewCategoryController
{
  public static async days(request:Request,response:Response)
  {
    const {id} = request.body;
    const run = await daysNewCategoryService.execute(id);

    return response.json(run)
  }
}

export default DaysNewCategoryController;