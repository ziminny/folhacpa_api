import { Router } from "express";
import ResetPasswordController from "../controllers/ResetPasswordController";
import UserController from "../controllers/UserController";
import userModifyYourself from "../middlewares/userModifyYourself";




const publicRoutes = Router();


publicRoutes.post("/" , UserController.create);
publicRoutes.post("/auth",UserController.auth);

publicRoutes.post("/send_password",ResetPasswordController.sendEmailResetPassword);
publicRoutes.post("/compare_token/:id",ResetPasswordController.compareToken);
publicRoutes.post("/reset_password/:id",ResetPasswordController.changePassword);

export default publicRoutes;