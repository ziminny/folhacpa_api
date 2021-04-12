import { String } from "aws-sdk/clients/cloudsearch";
import { getRepository } from "typeorm";
import Category from "../../models/category";
import Question from "../../models/question";

class ListOneCategoryService
{

  public async execute(id:String) :Promise<Category | undefined>
  {
    const repository = getRepository(Category)

    const category =  await repository
    .createQueryBuilder("cat")                   
    .leftJoinAndSelect("cat.color","color_id")
     .leftJoinAndMapMany("cat.question" , Question,"question","question.category_id = cat.id")
     .leftJoinAndSelect('question.typeQuestion','type_question_id') 
     .where("cat.id = :id",{id})
    .getOne()

    return category;
  }

}

export const listOneCategoryService = new ListOneCategoryService;