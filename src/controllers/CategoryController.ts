import { Request, Response } from "express";
import { listCategoryService } from "../services/category/ListCategoryService";

class CategoryController
{
  public static async list(request:Request , response:Response)
  {
    const categories = await listCategoryService.execute();
    return response.json(categories);
  }
}

export default CategoryController;