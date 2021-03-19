import { getRepository } from "typeorm";
import Period from "../../models/period";

class ListPeriodService
{
  public async execute() :Promise<Period[]>
  {
    const repository = getRepository(Period);

    return await repository.find()
  }
}

export const listPeriodService = new ListPeriodService;