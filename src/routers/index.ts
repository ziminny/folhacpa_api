import { Router } from "express";
import ensureAuthentication from "../middlewares/ensureAuthentication";
import periodRouter from "./public-period";
import publicRoutes from "./public-user";
import userRouter from "./user";


const routers = Router();

routers.use("/users",publicRoutes);
routers.use("/users",ensureAuthentication,userRouter)

routers.use("/period",periodRouter);


export default routers;