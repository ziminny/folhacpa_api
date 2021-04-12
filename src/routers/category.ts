import { Router } from "express";
import CategoryController from "../controllers/CategoryController";
import PeriodController from "../controllers/PeriodController";
import ensureAuthentication from "../middlewares/ensureAuthentication";
import isAdmin from "../middlewares/isAdmin";



const categoryRouter = Router();

categoryRouter.get("/",ensureAuthentication,CategoryController.list);
categoryRouter.get("/:id",ensureAuthentication,isAdmin,CategoryController.listOne);
export default categoryRouter;