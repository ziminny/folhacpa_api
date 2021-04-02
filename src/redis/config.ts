import redis from "redis";
import {promisify} from "util"

export interface RedisOptions {
  get(key:string):Promise<string | null> ;
  set(key:string,value:string):Promise<void>;
  expireat(key:string,exp:number):Promise<number>;
  del(key:string):Promise<number>
  exists(token:string):Promise<number>
}



export default (prefix:string):RedisOptions => {
  const client = redis.createClient({prefix})
  const getAsync = promisify(client.get).bind(client)
  const setAsync = promisify(client.set).bind(client)
  const expireatAsync = promisify(client.expireat).bind(client)
  const delAsync = promisify(client.del).bind(client)
  const existsAsync = promisify(client.exists).bind(client)
  
   return {
    get: async (key:string):Promise<string | null> => {
      return await getAsync(key)
    },
    set: async (key:string,value:string):Promise<void> => {
      await setAsync(key,value);
    },
    expireat: async (key:string,exp:number):Promise<number> => {
      return await expireatAsync(key,exp)
    },
    del: async (key:string) => {
      //@ts-ignore
      return await delAsync(key)
    },
    exists: async (token:string):Promise<number> => {
      //@ts-ignore
      return await existsAsync(token);
    }
   }
}

