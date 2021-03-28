import { Router } from "express";
import UserController from "../controllers/UserController";
import multer from "multer";
import uploadConfig from "../configs/upload"
import userModifyYourself from "../middlewares/userModifyYourself";
import isAdmin from "../middlewares/isAdmin";
import ensureAuthentication from "../middlewares/ensureAuthentication";




const userRouter = Router();

const upload = multer(uploadConfig);

userRouter.get("/" , isAdmin,UserController.list);

userRouter.get("/:id" , userModifyYourself,UserController.listOne);

userRouter.put("/:id" , userModifyYourself, UserController.update);

userRouter.delete("/:id" , userModifyYourself ,UserController.delete);

userRouter.patch("/avatar",upload.single('avatar'),UserController.updateAvatar);




export default userRouter;