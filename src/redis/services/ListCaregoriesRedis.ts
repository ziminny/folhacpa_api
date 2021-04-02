import moment from "moment";
import AbstractRedis from "./AbstractRedis";

class ListCaregoriesRedis extends AbstractRedis
{
  protected value:string;
  constructor()
  {
    super("ListCategories:")
    this.value = "categories";
  }

  public async addCategories(categories:object)
  {  
    const expireIn = moment().add(1,"d").unix();
    await super.set(this.value,JSON.stringify(categories))
    await super.expireat(this.value,expireIn);
  }

  public async getCategories():Promise<string | null>
  {
    return await super.get(this.value);
  }
}

export const listCaregoriesRedis = new ListCaregoriesRedis;