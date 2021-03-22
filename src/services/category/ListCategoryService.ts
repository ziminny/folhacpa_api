import { getRepository } from "typeorm";
import Category from "../../models/category";
import Question from "../../models/question";
import TypeQuestion from "../../models/typeQuestion";

class ListCategoryService
{
  public async execute() :Promise<Category[]>
  {
    const repository = getRepository(Category);

    const categories = await repository
    .createQueryBuilder("cat")                   
    .leftJoinAndSelect("cat.color","color_id")
     .leftJoinAndMapMany("cat.question" , Question,"question","question.category_id = cat.id")
     .leftJoinAndSelect('question.typeQuestion','type_question_id') 
    .getMany()


    return  categories;
  }
}

export const listCategoryService = new ListCategoryService;