import { getRepository, Repository } from "typeorm";
import Category from "../../models/category";
import Question from "../../models/question";
import { listCaregoriesRedis } from "../../redis/services/ListCaregoriesRedis";

class ListCategoryService
{
  public async execute() :Promise<Category[]>
  {
    const repository = getRepository(Category);

    

    const categoriesRedis = await listCaregoriesRedis.getCategories();
    
      if(!categoriesRedis) {
       
         const categories =  await repository
        .createQueryBuilder("cat")                   
        .leftJoinAndSelect("cat.color","color_id")
         .leftJoinAndMapMany("cat.question" , Question,"question","question.category_id = cat.id")
         .leftJoinAndSelect('question.typeQuestion','type_question_id') 
        .getMany()
        
        
     
        await listCaregoriesRedis.addCategories(categories)
       
        return categories;
      }
     
      const parseCategories = JSON.parse(categoriesRedis);
     
      return parseCategories;

    
  }
}

export const listCategoryService = new ListCategoryService;