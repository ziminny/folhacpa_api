
import redisConfig,{RedisOptions} from "../config";

class AbstractRedis
{
  public client:RedisOptions;

  constructor(prefix:string)
  {
   this.client = redisConfig(prefix)
    
  }

  protected async set(key:string,value:string) :Promise<void>
  {
    await this.client.set(key,value);
  }

  protected async get(key:string) : Promise<string | null>
  {
    return await this.client.get(key);
  }

  protected async expireat(key:string,exp:number) :Promise<number>
  {
    return await this.client.expireat(key,exp);
  }

  protected async del(key:string) :Promise<number>
  {
     return await this.client.del(key);
  }

  protected async exists(key:string) :Promise<boolean>
  {
     return await this.client.exists(key) === 1;
  }

}

export default AbstractRedis;