import {Request , Response} from "express";
import { createuserServiceAdmin } from "../../services/admin/user/CreateuserServiceAdmin";
import { deleteManyUsersService } from "../../services/admin/user/DeleteManyUsersService";


class UserControllerAdmin
{
  public static async deleteManyUsers(request:Request , response:Response):Promise<object>
  {

    const { ids } = request.body;
    
    await deleteManyUsersService.execute(ids);

    return response.json({});
  }

  public static async createAdmin(request:Request , response:Response):Promise<object>
  {

    const { name,lastName,email,password,periodId,ruleId } = request.body;
    
    const user = await createuserServiceAdmin.execute({name,lastName,email,password,periodId,ruleId});

    return response.json(user);
  }
  
  


}

export default UserControllerAdmin;