import { Router } from "express";
import UserController from "../controllers/UserController";
import multer from "multer";
import uploadConfig from "../configs/upload"
import userModifyYourself from "../middlewares/userModifyYourself";
import isAdmin from "../middlewares/isAdmin";
import ensureAuthentication from "../middlewares/ensureAuthentication";
import UserControllerAdmin from "../controllers/admin/UserControllerAdmin";

const userRouter = Router();

const upload = multer(uploadConfig);

userRouter.get("/" , isAdmin,ensureAuthentication,UserController.list);

userRouter.get("/:id" , userModifyYourself,UserController.listOne);

userRouter.put("/:id" , userModifyYourself, UserController.update);

userRouter.delete("/:id" , userModifyYourself ,UserController.delete);

userRouter.patch("/avatar",upload.single('avatar'),UserController.updateAvatar);

// Admin
userRouter.post("/delete-users",isAdmin,ensureAuthentication,UserControllerAdmin.deleteManyUsers);
userRouter.post("/create-user",isAdmin,ensureAuthentication,UserControllerAdmin.createAdmin);




export default userRouter;