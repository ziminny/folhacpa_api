import { getRepository } from "typeorm";
import AppError from "../../errors/AppError";
import User from "../../models/user";
import { errors } from "../../utils/messages";
import path from "path";
import uploadConfig from "../../configs/upload";
import fs from "fs";

interface Request {
  userId:string;
  avatarFilename:string;
}
class UpdateAvatarUserService
{

  public async execute({avatarFilename,userId:id}:Request) :Promise<User>
  {
     const repository = getRepository(User);
     
     const user = await repository.findOne({id})

     if(!user) {
       throw new AppError(errors.changeAvatarNoAuthenticate);  
     }

     if(user.avatar) {
       const userAvatarFilePath = path.join(uploadConfig.directory,user.avatar);
       const userAvatarFileExists =  await fs.promises.stat(userAvatarFilePath);

       if(userAvatarFileExists) {
         await fs.promises.unlink(userAvatarFilePath);
       }
     }
      user.avatar = avatarFilename;
      await repository.save(user);

      return user;

  }

}

export const updateAvatarUserService = new UpdateAvatarUserService;