import {Request , Response} from "express";
import { authService } from "../services/user/AuthService";
import { authServiceAdmin } from "../services/user/AuthServiceAdmin";
import { createUserServices } from "../services/user/CreateUserServices";
import { deleteUserService } from "../services/user/DeleteUserService";
import { listOneUserService } from "../services/user/ListOneUserService";
import { listUserService } from "../services/user/ListUserService";
import { logoutUserService } from "../services/user/LogoutUserService";
import { refreshTokenService } from "../services/user/RefreshTokenService";
import { updateAvatarUserService } from "../services/user/UpdateAvatarUserService";
import { updateUserService } from "../services/user/UpdateUserService";

class UserController
{
  public static async create(request:Request , response:Response):Promise<object>
  {

    const { name , lastName , email , password , periodId  } = request.body;
    
    const user = await createUserServices.execute({ name , lastName , email , password , periodId  });

    return response.status(201).json(user);
  }

  public static async list(request:Request , response:Response):Promise<object>
  { 
    const user = await listUserService.execute();
    return response.json(user);
  }

  public static async delete(request:Request , response:Response):Promise<object>
  { 
    const { id } = request.params;
    const user = await deleteUserService.execute(id);
    return response.json(user);
  }

 
  public static async update(request:Request , response:Response):Promise<object>
  { 
    const { id } = request.params;
    const { name,lastName,email,password,periodId} = request.body;
    const user = await updateUserService.execute({id, name,lastName,email,password,periodId});
    return response.json(user);
  }

  public static async listOne(request:Request , response:Response):Promise<object>
  { 
    const { id } = request.params;
    const user = await listOneUserService.execute(id);
    return response.json(user);
  }

  public static async auth(request:Request , response:Response):Promise<object>
  { 
    const { email , password} = request.body;
    const { user , token , refreshToken } = await authService.execute({email,password});
    return response.json({ user , token,refreshToken});
  }

  public static async authAdmin(request:Request , response:Response):Promise<object>
  { 
    const { email , password} = request.body;
    const { user , token , refreshToken } = await authServiceAdmin.execute({email,password});
    return response.json({ user , token,refreshToken});
  }

  public static async refreshToken(request:Request , response:Response):Promise<object>
  { 
    const { refreshToken:tok , id} = request.body;
    const { refreshToken,token} = await refreshTokenService.execute({id,refreshToken:tok})
    return response.json({ token,refreshToken});
  }

  public static async updateAvatar(request:Request , response:Response):Promise<object>
  { 
    //const { email , password} = request.body;
   
    
    const user = await updateAvatarUserService.execute({
      userId:request.user.id,       
      avatarFilename:request.file.filename
    });
    return response.json(user);
  }

  public static async logout(request:Request , response:Response):Promise<object>
  { 
    
    const {refreshToken} = request.body
      try {
        const accessToken = request.headers.authorization;
    
    
        const user = await logoutUserService.execute(refreshToken,accessToken)
        return response.json(user);
      } catch (error) {
        console.log(error);
        
        return response.json({});
      }
  }

  



}

export default UserController;