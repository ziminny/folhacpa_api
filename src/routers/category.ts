import { Router } from "express";
import CategoryController from "../controllers/CategoryController";
import PeriodController from "../controllers/PeriodController";
import ensureAuthentication from "../middlewares/ensureAuthentication";



const categoryRouter = Router();

categoryRouter.get("/",ensureAuthentication,CategoryController.list);
export default categoryRouter;