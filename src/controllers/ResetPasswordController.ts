import {Request , Response} from "express";
import decryptToken from "../configs/decryptToken";
import { changePasswordUserService } from "../services/resetPassword/ChangePasswordUserService";
import { comparePasswardUserService } from "../services/resetPassword/ComparePasswardUserService";
import { sendEmailResetPasswordService } from "../services/resetPassword/SendEmailResetPasswordService";

class ResetPasswordController
{

  public static async sendEmailResetPassword(request:Request , response:Response):Promise<object>
  { 
    const { email } = request.body;
    const resetPassword = await sendEmailResetPasswordService.execute({email})
    
    return response.json(resetPassword);
  }

  public static async compareToken(request:Request , response:Response):Promise<object>
  { 
    const { token } = request.body;
    const { id } = request.params
    const resetPassword = await comparePasswardUserService.execute({id, token})
    
    return response.json(resetPassword);
  }

  public static async changePassword(request:Request , response:Response):Promise<object>
  { 
    const { password } = request.body;
    const  authorization  = request.headers.authorization

    
    const id = decryptToken(authorization);
    const resetPassword = await changePasswordUserService.execute({id, password})
    
    return response.json(resetPassword);
  }

}

export default ResetPasswordController;