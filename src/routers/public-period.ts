import { Router } from "express";
import PeriodController from "../controllers/PeriodController";



const periodRouter = Router();

periodRouter.get("/",PeriodController.list);
export default periodRouter;