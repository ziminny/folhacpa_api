import { Router } from "express";
import CategoryController from "../controllers/CategoryController";
import PeriodController from "../controllers/PeriodController";



const categoryRouter = Router();

categoryRouter.get("/",CategoryController.list);
export default categoryRouter;