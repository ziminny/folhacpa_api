import { Router } from "express";
import ensureAuthentication from "../middlewares/ensureAuthentication";
import categoryRouter from "./category";
import periodRouter from "./public-period";
import publicRoutes from "./public-user";
import userRouter from "./user";


const routers = Router();

routers.use("/users",publicRoutes);
routers.use("/users",ensureAuthentication,userRouter)

routers.use("/period",periodRouter);

routers.use("/category",categoryRouter);


export default routers;