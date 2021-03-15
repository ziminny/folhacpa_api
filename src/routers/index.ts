import { Router } from "express";
import ensureAuthentication from "../middlewares/ensureAuthentication";
import publicRoutes from "./public";
import userRouter from "./user";


const routers = Router();

routers.use("/users",publicRoutes);

routers.use("/users",ensureAuthentication,userRouter)


export default routers;