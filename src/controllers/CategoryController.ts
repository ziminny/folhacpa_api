import { Request, Response } from "express";
import { listCategoryService } from "../services/category/ListCategoryService";
import { listOneCategoryService } from "../services/category/ListOneCategoryService";

class CategoryController
{
  public static async list(request:Request , response:Response)
  {
    const categories = await listCategoryService.execute();
    return response.json(categories);
  }

  public static async listOne(request:Request , response:Response)
  {
    const { id } = request.params
    const category = await listOneCategoryService.execute(id);
    return response.json(category);
  }
}

export default CategoryController;